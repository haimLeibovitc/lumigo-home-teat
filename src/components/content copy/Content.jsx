/** @format */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getRooms } from '../../modules/actions';

const Wrapper = styled.div``;

function Content({}) {
  useEffect(() => {}, []);

  return <Wrapper></Wrapper>;
}

Content.propTypes = {
  Content: PropTypes.object
};

Content.defaultProps = {
  Content: {}
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);
