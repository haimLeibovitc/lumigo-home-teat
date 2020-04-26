/** @format */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Item from './Item';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function List({ list, className }) {
  const generateList = () => {
    return list.map((item) => <Item key={item.title} item={item} />);
  };

  return <Wrapper className={className}>{generateList()}</Wrapper>;
}

List.propTypes = {
  list: PropTypes.array,
  variant: PropTypes.string
};

List.defaultProps = {
  list: []
};

export default List;
