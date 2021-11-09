import React from 'react';
import Input from '../../Components/Input';
import { Wrapper, SubmitButton } from './styles';

const UrlShortener: React.FC = () => {
  return (
    <Wrapper>
      <Input type="text" />
      <SubmitButton title="Shorten" type="submit" />
    </Wrapper>
  );
};

export default UrlShortener;
