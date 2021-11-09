import React from 'react';
import { StyledText, TextProps } from './style';

const Text: React.FC<TextProps> = ({ title, fontWeight, fontSize }) => {
  return (
    <StyledText fontWeight={fontWeight} fontSize={fontSize}>
      {title}
    </StyledText>
  );
};

export default Text;
