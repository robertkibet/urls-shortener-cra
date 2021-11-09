/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ButtonProps, StyledButton } from './styles';

const Button: React.FC<ButtonProps> = ({ size, type, title, backgroundColor, color, ...rest }) => {
  return (
    <StyledButton type={type || 'button'} size={size || 'normal'} backgroundColor={backgroundColor} color={color} {...rest}>
      {title}
    </StyledButton>
  );
};

export default Button;
