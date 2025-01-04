import { flexPos } from '@/styled/mixin';
import { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

const ButtonWrap = styled.button`
  background-color: #fff;
  box-shadow: -5rem 4rem 4rem 0 #00000040;
  font-size: 16rem;
  font-weight: 700;
  border-radius: 10rem;
`;

const Button: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return <ButtonWrap className={className}>{children}</ButtonWrap>;
};

export default Button;
