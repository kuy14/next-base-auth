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
import Head from "next/head";
import GoogleFonts from "next-google-fonts";
import { useRouter } from "next/router";
import { CreateProject, DetailProject } from "../../components/Project/index";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import styles from "../../styles/Project.module.css";

const Project = () => {
  const router = useRouter();
  const [contentTitle, setContentTitle] = useState("");

  const eventState = useSelector((state) => state.events.events);
  const ContentRender = () => {
    switch (router.query.action) {
      case "create":
        return <CreateProject />;
      case "detail":
        return <DetailProject projectId={router.query.id} />;
      default:
        return <h1>Dynamic Content</h1>;
    }
  };

  return (
    <>
      <Fragment>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,600;0,700;1,400&display=swap" />
        <Head>
          <title>Project Manager</title>
        </Head>
      </Fragment>
      <FixedMenuLayout />
      <Grid container stackable style={{ marginTop: "10px" }} className="fonts">
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
                          <Item.Header as="a" className={styles.projectTitle}>
                            {item.title}
                          </Item.Header>
                          <Item.Meta>
                            <span>
                              {item.start.toString()} - {item.end.toString()}
                            </span>
                          </Item.Meta>
                          <Item.Description>{item.desc}</Item.Description>
                          <Item.Extra>
                            <Link
                              href={`/project?action=detail&id=${item.id}`}
                              as="/project/detail"
                            >
                              <Button floated="right" primary size="mini">
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
              <ContentRender />
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Project;
