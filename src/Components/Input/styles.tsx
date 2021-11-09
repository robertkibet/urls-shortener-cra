import React from 'react';
import styled from '@emotion/styled';
import themeColors from '../../Theme';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const StyledInput = styled.input`
  width: 400px;
  height: 50px;
  font-size: 20px;
  border-radius: 30px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  border: 3px solid ${themeColors.black};
  transition: border 0.2s ease-in-out;
  outline: none;

  @media (max-width: 600px) {
    width: 100%;
  }
  &: focus {
    border: 3px solid ${themeColors.primary} !important;
  }
  &: active {
    border: 3px solid ${themeColors.primary} !important;
  }
`;
