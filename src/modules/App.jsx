/** @format */

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import RoomList from '../components/roomList/RoomList';
import ChatRoom from '../components/chatRoom/ChatRoom';
import Comp2 from '../components/comp2/Comp2';
import theme from '../theme';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media ${(p) => p.theme.media.mobile} {
    /* background: red; */
  }
`;

// const Header = styled.div`
//   height: 40px;
//   background: gray;
//   cursor: pointer;
//   padding: 1%;
// `;

// const Footer = styled.div`
//   height: 40px;
//   background: gray;
// `;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/rooms-list' component={RoomList} />
            <Route path='/chat-room' component={ChatRoom} />
          </Switch>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
