/** @format */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getRoomsMsgs, postMsg } from '../../modules/actions';
import Content from '../content/Content';
import UserList from './UserList';
import { Button } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Footer = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Input = styled.input`
  height: 30px;
  width: 500px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const WrapperContentList = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  border: 1px solid gray;
  margin-top: 38px;
`;

const UserListElem = styled(UserList)`
  flex: 1;
`;

const ButtonElem = styled(Button)`
  height: 80%;
  flex: 1;
  height: 35px;
  width: 30px !important;
  margin-left: 20px !important;
`;

let interval;

function ChatRoom({ getRoomsMsgs, postMsg, msgText }) {
  useEffect(() => {
    interval = setInterval(() => {
      getRoomsMsgs(0);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [text, setText] = useState('');

  const handlePostMsg = () => {
    postMsg(0, text);
    setText('');
  };
  console.log(msgText);
  return (
    <Wrapper>
      <WrapperContentList>
        <UserListElem />
        <Content msgText={msgText} />
      </WrapperContentList>
      <Footer>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <ButtonElem
          onClick={() => handlePostMsg()}
          variant='outlined'
          color='primary'
        >
          send
        </ButtonElem>
      </Footer>
    </Wrapper>
  );
}

ChatRoom.propTypes = {
  ChatRoom: PropTypes.object
};

ChatRoom.defaultProps = {
  ChatRoom: {}
};

const mapStateToProps = (state) => {
  const { chat } = state;
  const { roomMsgs = {} } = chat;
  const { text: msgText } = roomMsgs;
  return { msgText };
};

const mapDispatchToProps = (dispatch) => ({
  getRoomsMsgs: () => dispatch(getRoomsMsgs(0)),
  postMsg: (roomId, msg) => dispatch(postMsg(roomId, msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
