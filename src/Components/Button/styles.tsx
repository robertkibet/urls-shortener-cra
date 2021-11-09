import React from 'react';
import styled from '@emotion/styled';
import themeColors from '../../Theme';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  title?: string;
  size?: 'small' | 'normal';
}
export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || themeColors.primary};
  color: ${({ color }) => color || themeColors.white};
  height: ${({ size }) => (size === 'small' ? '30px' : '36px')};
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 600;

  &: hover {
    filter: brightness(0.8);
  }
`;
