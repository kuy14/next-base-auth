import Link from "next/link";
import { List, Image } from "semantic-ui-react";

const ChatList = () => {
  return (
    <List divided selection animated verticalAlign="middle">
      <Link href={`/chat?id=1`} as="/chat/1">
        <List.Item>
          <Image avatar src="https://placeimg.com/640/480/people" />
          <List.Content>
            <List.Header as="a">User 1</List.Header>
          </List.Content>
        </List.Item>
      </Link>
      <Link href={`/chat?id=2`} as="/chat/2">
        <List.Item>
          <Image avatar src="https://placeimg.com/640/480/people" />
          <List.Content>
            <List.Header as="a">User 2</List.Header>
          </List.Content>
        </List.Item>
      </Link>
      <Link href={`/chat?id=3`} as="/chat/3">
        <List.Item>
          <Image avatar src="https://placeimg.com/640/480/people" />
          <List.Content>
            <List.Header as="a">User 3</List.Header>
          </List.Content>
        </List.Item>
      </Link>
    </List>
  );
};

export default ChatList;
