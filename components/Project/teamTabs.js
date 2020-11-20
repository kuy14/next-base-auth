import { Tab, List, Button, Checkbox } from "semantic-ui-react";
import { useState } from "react";

const teamTabs = () => {
  const [checkBoxState, setCheckBoxState] = useState([]);
  const panes = [
    {
      menuItem: "Photography Team",
      render: () => (
        <Tab.Pane attached={false}>
          <List divided selection relaxed>
            <List.Item key="1">
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Nana Photography{" "}
                  <Button
                    style={{ float: "right" }}
                    value="Nana Photography"
                    onClick={() => {
                      setCheckBoxState([
                        ...checkBoxState,
                        { name: "Nana Photography" },
                      ]);
                    }}
                  >
                    Add
                  </Button>
                </List.Header>
                <List.Description as="a">Updated 10 mins ago </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Nini Photography{" "}
                  <Button
                    style={{ float: "right" }}
                    onClick={() => {
                      setCheckBoxState([
                        ...checkBoxState,
                        { name: "Nini Photography" },
                      ]);
                    }}
                  >
                    Add
                  </Button>
                </List.Header>
                <List.Description as="a">Updated 22 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Nunu Photography{" "}
                  <Button
                    style={{ float: "right" }}
                    onClick={() => {
                      setCheckBoxState([
                        ...checkBoxState,
                        { name: "Nunu Photography" },
                      ]);
                    }}
                  >
                    Add
                  </Button>
                </List.Header>
                <List.Description as="a">Updated 34 mins ago</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Editor Team",
      render: () => (
        <Tab.Pane attached={false}>
          {" "}
          <List divided selection relaxed>
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Editor 1 <Button style={{ float: "right" }}>Apply</Button>
                </List.Header>
                <List.Description as="a">Updated 10 mins ago </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Editor 2 <Button style={{ float: "right" }}>Apply</Button>
                </List.Header>
                <List.Description as="a">Updated 22 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Editor 3 <Button style={{ float: "right" }}>Apply</Button>
                </List.Header>
                <List.Description as="a">Updated 34 mins ago</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Makeup Team",
      render: () => (
        <Tab.Pane attached={false}>
          {" "}
          <List divided selection relaxed>
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Makeup 1 <Button style={{ float: "right" }}>Apply</Button>
                </List.Header>
                <List.Description as="a">Updated 10 mins ago </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Makeup 2 <Button style={{ float: "right" }}>Apply</Button>
                </List.Header>
                <List.Description as="a">Updated 22 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Makeup 3 <Button style={{ float: "right" }}>Apply</Button>
                </List.Header>
                <List.Description as="a">Updated 34 mins ago</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Tab.Pane>
      ),
    },
  ];
  return <Tab menu={{ pointing: true }} panes={panes} />;
};

export default teamTabs;
