/** @format */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
`;

const P = styled.p``;

function Item({ item }) {
  const { completed, title } = item;

  return (
    <Wrapper>
      <P>{title}</P>
      <P>{`status: ${completed}`}</P>
    </Wrapper>
  );
}

Item.propTypes = {
  item: PropTypes.object
};

Item.defaultProps = {
  item: {}
};

export default Item;
