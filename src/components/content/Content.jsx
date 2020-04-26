/** @format */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getRooms } from '../../modules/actions';

const Wrapper = styled.div`
  flex: 4;
  overflow-y: scroll;
  margin-top: 28px;
`;

const Message = styled.div`
  border-radius: 5px;
  width: fit-content;
  padding: 10px;
  background: ${(p) => (p.me === 'me' ? 'darkseagreen' : 'aliceblue')};
  margin-bottom: 20px;
  margin-left: 100px;
`;

function Content({ msgText = [] }) {
  useEffect(() => {}, []);

  return (
    <Wrapper>
      {msgText.map((msg, index) => (
        <Message me={msg.userId === '0'} key={index}>
          {msg.text}{' '}
        </Message>
      ))}
    </Wrapper>
  );
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
