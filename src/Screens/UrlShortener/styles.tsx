import styled from '@emotion/styled';
import { Field } from 'formik';
import React from 'react';
import Button from '../../Components/Button';
import themeColors from '../../Theme';

export const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    align-items: end;
    height: 150px;
  }
  @media (min-width: 600px) {
    gap: 20px;
  }
`;

export const SubmitButton = styled(Button)`
  height: 50px;
  border-radius: 30px;
  width: 150px;
`;

interface InputWrapperInterface {
  error?: boolean;
}
export const InputWrapper = styled.div<InputWrapperInterface>`
  position: relative;

  span {
    position: absolute;
    bottom: -25px;
    left: 20px;
    color: ${({ error }) => (error ? themeColors.error : themeColors.primary)};
  }
`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input = styled(Field)`
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
