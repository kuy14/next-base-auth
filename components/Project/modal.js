import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Tab, Icon, List } from "semantic-ui-react";
import { setTeamGroup } from "../../lib/slices/eventSlice";

const TeamModal = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [showAction, setShowAction] = useState("none");
  const teamGroupState = useSelector((state) => state.events.teamGroup);
  const newTeamGroup = teamGroupState ?? [];

  const onButtonApply = (name) => {
    console.log(name);
  };

  const panes = [
    {
      menuItem: "Photography Team",
      render: () => (
        <Tab.Pane attached={false}>
          <List divided selection relaxed>
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">
                  Nana Photography{" "}
                  <Button
                    onClick={onButtonApply("Nana Photography")}
                    style={{ float: "right" }}
                  >
                    Apply
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
                    onClick={onButtonApply("Nini Photography")}
                    style={{ float: "right" }}
                  >
                    Apply
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
                    onClick={onButtonApply("Nunu Photography")}
                    style={{ float: "right" }}
                  >
                    Apply
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

  const TabExamplePointing = () => (
    <Tab menu={{ pointing: true }} panes={panes} />
  );

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<a>+ Add New Team</a>}
    >
      <Modal.Header>Add New Team</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>{TabExamplePointing()}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export const passing = { name: "test" };

export default TeamModal;
