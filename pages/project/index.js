import FixedMenuLayout from "../../components/MenuHeader/fixedMenuHeader";
import {
  Segment,
  Grid,
  Container,
  Item,
  Button,
  Icon,
  Label,
} from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CreateProject, DetailProject } from "../../components/Project/index";
import { useState } from "react";
import { useSelector } from "react-redux";

const Project = () => {
  const router = useRouter();
  const [contentTitle, setContentTitle] = useState("");

  const eventState = useSelector((state) => state.events.events);
  console.log(eventState);

  const ContentRender = () => {
    switch (router.query.action) {
      case "create":
        return <CreateProject />;
      case "detail":
        return <DetailProject />;
      default:
        return <h1>Dynamic Content</h1>;
    }
  };

  return (
    <>
      <FixedMenuLayout />
      <Grid container stackable style={{ marginTop: "10px" }}>
        <Grid.Column width={5}>
          <Segment.Group>
            <Segment>
              <h4>My Project</h4>
            </Segment>
            <Segment>
              <Container>
                <Item.Group divided>
                  {eventState.map((item) => {
                    return (
                      <Item>
                        <Item.Content>
                          <Item.Header as="a">{item.title}</Item.Header>
                          <Item.Meta>
                            <span>{/* {item.start} " - " {item.end} */}</span>
                          </Item.Meta>
                          <Item.Description>{item.desc}</Item.Description>
                          <Item.Extra>
                            <Link
                              href="/project?action=detail"
                              as="/project/detail"
                            >
                              <Button floated="right" primary>
                                Detail
                                <Icon name="chevron right" />
                              </Button>
                            </Link>
                            <Label>{item.type}</Label>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    );
                  })}
                </Item.Group>
              </Container>
            </Segment>
            <Segment>
              <Link href="/project?action=create" as="/project/create">
                <a>Create New Project</a>
              </Link>
            </Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment.Group>
            <Segment>
              <h4>{contentTitle}</h4>
            </Segment>
            <Segment>
              <ContentRender />
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Project;
