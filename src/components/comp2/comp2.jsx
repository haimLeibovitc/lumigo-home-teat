/** @format */
/** @format */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const P = styled.p``;

function Comp2({ Comp2 }) {
  return <Wrapper>comp2</Wrapper>;
}

Comp2.propTypes = {
  Comp2: PropTypes.object
};

Comp2.defaultProps = {
  Comp2: {}
};

export default Comp2;
