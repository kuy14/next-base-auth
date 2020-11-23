import FixedMenuLayout from "../../components/MenuHeader/fixedMenuHeader";
import { Segment, Grid, List, Image, Card } from "semantic-ui-react";
import styles from "../../styles/Chat.module.css";

const ChatPage = () => {
  return (
    <>
      <FixedMenuLayout />
      <Grid container stackable style={{ marginTop: "10px" }}>
        <Grid.Column width={5}>
          <Segment.Group>
            <Segment>
              <h4>Chat List</h4>
            </Segment>
            <Segment>
              <List divided selection animated verticalAlign="middle">
                <List.Item>
                  <Image avatar src="https://placeimg.com/640/480/people" />
                  <List.Content>
                    <List.Header as="a">Room Group 1</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src="https://placeimg.com/640/480/people" />
                  <List.Content>
                    <List.Header as="a">Room Group 2</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src="https://placeimg.com/640/480/people" />
                  <List.Content>
                    <List.Header as="a">Room Group 3</List.Header>
                  </List.Content>
                </List.Item>
              </List>
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
              <Grid
                container
                centered
                stackable
                style={{ marginTop: "10px", minHeight: "400px" }}
              >
                <Grid.Column width={16}>
                  <div className={styles.receive_chat}>
                    <Image
                      src="https://placeimg.com/640/480/people"
                      avatar
                      style={{ display: "inline-block" }}
                    />
                    <span> ini test chat</span>
                    <small className={styles.receive_chat_date}>
                      16:00 | 23 November 2020
                    </small>
                  </div>
                  <div
                    className={styles.receive_chat}
                    style={{ display: "block" }}
                  >
                    <Image
                      src="https://placeimg.com/640/480/people"
                      avatar
                      style={{ display: "inline-block", marginBottom: "10px" }}
                    />
                    <span> Selamat sore, perkenalkan saya ...</span>
                    <small className={styles.receive_chat_date}>
                      16:00 | 23 November 2020
                    </small>
                  </div>
                  <div
                    className={styles.sent_chat}
                    style={{ display: "block" }}
                  >
                    <span> Hallo selamat sore juga</span>
                    <small className={styles.sent_chat_date}>
                      16:00 | 23 November 2020
                    </small>
                  </div>
                  {/* <div style={{ display: "inline-block" }}></div> */}
                </Grid.Column>
              </Grid>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default ChatPage;
