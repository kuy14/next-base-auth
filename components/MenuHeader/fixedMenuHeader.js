import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import Link from "next/link";
const FixedMenuLayout = () => (
  <div>
    <Menu inverted style={{ borderRadius: "0" }}>
      <Container>
        <Menu.Item as="a" header>
          Project Name
        </Menu.Item>
        <Link href="/dashboard">
          <Menu.Item>Dashboard</Menu.Item>
        </Link>
        <Dropdown item simple text="Collection">
          <Dropdown.Menu>
            <Link href="/profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Item>Log Out</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>PROJECT SETUP</Dropdown.Header>
            <Link href="/project">
              <Dropdown.Item>My Project</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
);

export default FixedMenuLayout;
