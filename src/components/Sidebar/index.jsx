import React from 'react';
import { Link } from 'react-router-dom';
import {
  TiLink,
  TiThMenu,
  TiHome,
  TiClipboard,
  TiGlobe,
  TiFolder,
  TiTime,
  TiBook,
  TiKey,
} from 'react-icons/ti';
import { Container, Header, Menu, NavLinks, ListItem, Sider } from './styles';

import MainContent from './Content';

function Sidebar() {
  return (
    <Container>
      <Sider>
        <Header>
          <h3>
            <span className="ti-unlink">
              <TiLink />
            </span>
            <span>Admin</span>
          </h3>
          <TiThMenu />
        </Header>
        <Menu>
          <NavLinks>
            <ListItem>
              <Link to="/">
                <span className="ti-home">
                  <TiHome />
                </span>
                <span>Home</span>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <span className="ti-face-sile">
                  <TiClipboard />
                </span>
                <span>Team</span>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <span className="ti-agenda">
                  <TiGlobe />
                </span>
                <span>Tasks</span>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <span className="ti-clipboard">
                  <TiClipboard />
                </span>
                <span>Leaves</span>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <span className="ti-folder">
                  <TiFolder />
                </span>
                <span>Projects</span>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <span className="ti-time">
                  <TiTime />
                </span>
                <span>TimeSheet</span>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <span className="ti-book">
                  <TiBook />
                </span>
                <span>Contacts</span>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <span className="ti-settings">
                  <TiKey />
                </span>
                <span>Account</span>
              </Link>
            </ListItem>
          </NavLinks>
        </Menu>
      </Sider>

      <MainContent />
    </Container>
  );
}

export default Sidebar;
