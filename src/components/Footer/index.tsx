import { flexPos } from '@/styled/mixin';
import React from 'react';
import { styled } from 'styled-components';

const FooterWrap = styled.div`
  position: absolute;
  ${flexPos('center')}
  left: 50%;
  bottom: 31rem;
  transform: translate(-50%, 0);
  z-index: 99;
  font-size: 16rem;
  font-weight: 500;
`;

const Footer = () => {
  return <FooterWrap>© 2024 DOGELINK</FooterWrap>;
};

export default Footer;
