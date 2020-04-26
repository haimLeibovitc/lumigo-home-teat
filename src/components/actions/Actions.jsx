/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
`;

const P = styled.p``;

const Form = styled.form`
  margin-top: 30px;
  @media ${(p) => p.theme.media.mobile} {
    background: red;
  }
`;

const Input = styled.input``;

const Button = styled.button``;

function Actions({ addTodo, className }) {
  const [textInput, setTextInput] = useState('');

  const handleAddTodo = () => {
    const itemToAdd = { completed: false, title: textInput };
    addTodo(itemToAdd);
  };

  return (
    <Wrapper className={className}>
      <Form onClick={(e) => e.preventDefault()}>
        <Input
          onChange={(e) => setTextInput(e.target.value)}
          placeholder='todo description'
          type='input'
        />
        <Button onClick={handleAddTodo}>addTodo</Button>
      </Form>
    </Wrapper>
  );
}

Actions.propTypes = {
  addTodo: PropTypes.func.isRequired
};

// Actions.defaultProps = {
//   item: {}
// };

export default Actions;
