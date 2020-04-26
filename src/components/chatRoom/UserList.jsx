/** @format */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getUsersPerRoom } from '../../modules/actions';

const Wrapper = styled.div`
  display: flex;
  background: white;
`;

function UserList({ className, getUsersPerRoom }) {
  useEffect(() => {
    getUsersPerRoom(0);
  }, []);

  return <Wrapper className={className}></Wrapper>;
}

const mapStateToProps = (state) => {
  const { chat } = state;
  const { userPerRoom } = chat;
  console.log(chat);
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUsersPerRoom: (id) => dispatch(getUsersPerRoom(id))
});

UserList.propTypes = {
  className: PropTypes.string
};

UserList.defaultProps = {
  className: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
