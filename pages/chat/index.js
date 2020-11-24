import FixedMenuLayout from "../../components/MenuHeader/fixedMenuHeader";
import {
  Segment,
  Grid,
  Image,
  Form,
  Input,
  Button,
  Icon,
  Dimmer,
  Header,
} from "semantic-ui-react";
import { useRouter } from "next/router";
import styles from "../../styles/Chat.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "../../lib/slices/chatSlice";
import ChatList from "../../components/Chat/ChatList";

const ChatPage = () => {
  const router = useRouter();

  const [message, setMessage] = useState("");
  let currentUser = 0;
  const [sortedChat, setSortedChat] = useState([]);
  const [handleState, setHandleState] = useState("");
  const [base64File, setBase64File] = useState("");

  const handleOpen = () => setHandleState({ active: true });
  const handleClose = () => {
    setHandleState({ active: false });
    setBase64File("");
  };

  const { active } = handleState;

  const chatContentState = useSelector(
    (state) => state.chats.chat[0].group1.chatContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    currentUser = router.query.id;
    let chatConvert = chatContentState.map(function (elem) {
      return {
        timestamp: new Date(elem.timestamp),
        userId: elem.userId,
        message: elem.message,
        isSender: elem.userId == parseInt(currentUser),
        chatType: elem.chatType,
      };
    });

    const sortedChat = chatConvert.sort((a, b) => a.timestamp - b.timestamp);
    setSortedChat(sortedChat);
  }, [router]);

  useEffect(() => {
    currentUser = router.query.id;
    let chatConvert = chatContentState.map(function (elem) {
      return {
        timestamp: new Date(elem.timestamp),
        userId: elem.userId,
        message: elem.message,
        isSender: elem.userId == parseInt(currentUser),
        chatType: elem.chatType,
      };
    });

    const sortedChat = chatConvert.sort((a, b) => a.timestamp - b.timestamp);
    setSortedChat(sortedChat);
  }, [chatContentState]);

  const onSend = () => {
    currentUser = parseInt(router.query.id);
    const now = new Date();
    const convert = now.toISOString();
    dispatch(
      setChat({
        timestamp: convert,
        userId: currentUser,
        message: message,
        chatType: "text",
      })
    );
    setMessage("");
  };
  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    if (file !== undefined) {
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    } else {
      setBase64File("");
    }
  };
  const onImageSend = () => {
    currentUser = parseInt(router.query.id);
    const now = new Date();
    const convert = now.toISOString();
    dispatch(
      setChat({
        timestamp: convert,
        userId: currentUser,
        message: base64File,
        chatType: "image",
      })
    );
    handleClose();
  };

  const renderChatContent = () => {
    return (
      <Grid.Column width={16}>
        {sortedChat.map((item) => {
          if (item.isSender === false && item.chatType === "text") {
            return (
              <div className={styles.receive_chat}>
                <Image
                  src="https://placeimg.com/640/480/people"
                  avatar
                  style={{ display: "inline-block" }}
                />

                <span> {item.message}</span>
                <small className={styles.receive_chat_date}>
                  {item.timestamp.getDate() +
                    "-" +
                    (item.timestamp.getMonth() + 1) +
                    "-" +
                    item.timestamp.getFullYear() +
                    " " +
                    item.timestamp.toTimeString().substr(0, 5)}
                </small>
              </div>
            );
          }
          if (item.isSender === true && item.chatType === "text") {
            return (
              <div className={styles.sent_chat}>
                <div className={styles.sent_chat_content}>
                  <span> {item.message}</span>
                  <small className={styles.sent_chat_date}>
                    {item.timestamp.getDate() +
                      "-" +
                      (item.timestamp.getMonth() + 1) +
                      "-" +
                      item.timestamp.getFullYear() +
                      " " +
                      item.timestamp.toTimeString().substr(0, 5)}
                  </small>
                </div>
              </div>
            );
          }
          if (item.isSender === false && item.chatType === "image") {
            return (
              <div className={styles.receive_chat}>
                <Image
                  src="https://placeimg.com/640/480/people"
                  avatar
                  style={{ display: "inline-block" }}
                />

                <Image
                  className={styles.receive_chat_image}
                  src={item.message}
                ></Image>
                <small className={styles.receive_chat_date}>
                  {item.timestamp.getDate() +
                    "-" +
                    (item.timestamp.getMonth() + 1) +
                    "-" +
                    item.timestamp.getFullYear() +
                    " " +
                    item.timestamp.toTimeString().substr(0, 5)}
                </small>
              </div>
            );
          }
          if (item.isSender === true && item.chatType === "image") {
            return (
              <div className={styles.sent_chat}>
                <div className={styles.sent_chat_content}>
                  <Image
                    className={styles.sent_chat_image}
                    src={item.message}
                  ></Image>
                  <small className={styles.sent_chat_date}>
                    {item.timestamp.getDate() +
                      "-" +
                      (item.timestamp.getMonth() + 1) +
                      "-" +
                      item.timestamp.getFullYear() +
                      " " +
                      item.timestamp.toTimeString().substr(0, 5)}
                  </small>
                </div>
              </div>
            );
          }
        })}
        <Image />
      </Grid.Column>
    );
  };

  return (
    <>
      <FixedMenuLayout />
      <Grid container stackable style={{ marginTop: "10px" }}>
        <Grid.Column width={5}>
          <Segment.Group>
            <Segment>
              <h4>Room Group 3 Users</h4>
            </Segment>
            <Segment>
              <ChatList />
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment.Group>
            <Segment>
              <h4>Chat</h4>
              <div>
                <Image src="https://placeimg.com/640/480/people" avatar />
                <span>Room Group 3</span>
              </div>
            </Segment>
            <Segment>
              <Grid container centered stackable className={styles.chatbox}>
                {renderChatContent()}
              </Grid>
            </Segment>
            <Segment>
              <div>
                <Form.Field>
                  <Input
                    icon={<Icon name="attach" link onClick={handleOpen} />}
                    // icon={{ name: "attach", circular: true, link: true, onClick={handleOpen}}}
                    className={styles.chat_inputbox}
                    type="text"
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                    value={message}
                    placeholder="Input your message here ..."
                  />

                  <Button
                    className={styles.btn_chat_send}
                    onClick={onSend}
                    primary
                  >
                    <Icon name="send"></Icon>
                  </Button>
                </Form.Field>
                <div>
                  <Dimmer active={active} onClickOutside={handleClose} page>
                    <Header as="h2" icon inverted>
                      <Form.Field>
                        <Grid
                          centered
                          container
                          stackable
                          style={{ marginBottom: "10px" }}
                        >
                          <Grid.Column width={10}>
                            <Image
                              className={styles.image_preview}
                              src={base64File}
                            />
                          </Grid.Column>
                          <Grid.Column width={10}>
                            <input
                              type="file"
                              style={{ overflow: "hidden" }}
                              onChange={(event) => {
                                getBase64(event.target.files[0], (result) => {
                                  setBase64File(result);
                                });
                              }}
                            />
                          </Grid.Column>
                        </Grid>
                      </Form.Field>
                      <Header.Subheader>
                        Upload an image to send{" "}
                        <Button onClick={onImageSend} primary>
                          Send Image
                        </Button>
                      </Header.Subheader>
                    </Header>
                  </Dimmer>
                </div>
              </div>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default ChatPage;
