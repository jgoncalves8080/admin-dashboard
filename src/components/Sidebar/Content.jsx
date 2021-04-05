import React from 'react';
import {
  TiLocation,
  TiBell,
  TiNotes,
  TiBriefcase,
  TiRefresh,
  TiInputChecked,
} from 'react-icons/ti';
import { Link } from 'react-router-dom';
import {
  MainContent,
  Input,
  SocialIcons,
  SearchWrapper,
  Main,
  DashboardCards,
  CardSingle,
  CardBody,
  CardFooter,
  Header,
  Avatar,
} from './stylesContent';

import myAvatar from '../../assets/pic.JPG';

function Sidebar() {
  return (
    <MainContent>
      <Header>
        <SearchWrapper>
          <span className="ti-search">
            <TiLocation />
          </span>
          <Input type="search" placeholder="Search" />
        </SearchWrapper>
        <SocialIcons>
          <span className="ti-bell">
            <TiBell />
          </span>
          <span className="ti-comment">
            <TiNotes />
          </span>
          <Avatar src={myAvatar} alt="" />
        </SocialIcons>
      </Header>
      <Main>
        <h2>Overview</h2>
        <DashboardCards>
          <CardSingle>
            <CardBody>
              <span>
                <TiBriefcase />
              </span>
              <div>
                <h5>Account Balance</h5>
                <h4>$30,659.45</h4>
              </div>
            </CardBody>
            <CardFooter>
              <Link to="/">View all</Link>
            </CardFooter>
          </CardSingle>

          <CardSingle>
            <CardBody>
              <span>
                <TiRefresh />
              </span>
              <div>
                <h5>Pending</h5>
                <h4>$19,500.45</h4>
              </div>
            </CardBody>
            <CardFooter>
              <Link to="/">View all</Link>
            </CardFooter>
          </CardSingle>

          <CardSingle>
            <CardBody>
              <span>
                <TiInputChecked />
              </span>
              <div>
                <h5>Processed</h5>
                <h4>$15,280</h4>
              </div>
            </CardBody>
            <CardFooter>
              <Link to="/">View all</Link>
            </CardFooter>
          </CardSingle>
        </DashboardCards>
      </Main>
    </MainContent>
  );
}

export default Sidebar;
