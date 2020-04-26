/** @format */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getRooms } from '../actions';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  margin: 20px;
`;

const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const RouterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(-50%, -50%);
`;

const ButtonElem = styled(Button)`
  width: 300px;
  height: 50px;
  margin-bottom: 100px;
  font-size: 12px !important;
  font-weight: bold !important;
  margin-bottom: 100px !important;
`;

const RouteLink = styled.div``;

function Home({ getRooms }) {
  //const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper>
      <WrapperButtons>
        <RouteLink to='/rooms-list' as={NavLink}>
          <ButtonElem variant='outlined' color='primary'>
            List of groups
          </ButtonElem>
        </RouteLink>
        <ButtonElem variant='outlined' color='primary'>
          Create new group
        </ButtonElem>
      </WrapperButtons>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  // const { todos } = state;
  // const { list } = todos;
  // return { list };
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getRooms: () => dispatch(getRooms())
  // addTodo: (data) => dispatch(addTodo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
