/** @format */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getRooms } from '../../modules/actions';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const RouteLink = styled.div`
  margin-bottom: 100px;
  cursor: pointer;
`;

function RoomList({ getRooms, list = [] }) {
  useEffect(() => {
    getRooms();
  }, []);

  return (
    <Wrapper>
      {list.map((room) => (
        <RouteLink to='/chat-room' as={NavLink}>
          {room.name}
        </RouteLink>
      ))}
    </Wrapper>
  );
}

RoomList.propTypes = {
  RoomList: PropTypes.object
};

RoomList.defaultProps = {
  RoomList: {}
};

const mapStateToProps = (state) => {
  const { chat } = state;
  const { list } = chat;
  return { list };
};

const mapDispatchToProps = (dispatch) => ({
  getRooms: () => dispatch(getRooms())
  // addTodo: (data) => dispatch(addTodo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
