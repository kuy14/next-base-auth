import FixedMenuLayout from "../../components/MenuHeader/fixedMenuHeader";
import {
  Segment,
  Grid,
  Container,
  Item,
  Button,
  Icon,
  Label,
  Image,
} from "semantic-ui-react";

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
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment.Group>
            <Segment>
              <h4>Chat</h4>
              <div>
                <Image src="https://dummyimage.com/600x400/000/fff" avatar />
                <span>John</span>
              </div>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default ChatPage;
