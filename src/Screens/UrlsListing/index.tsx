import React from 'react';
import Text from '../../Components/Text';
import { UrlsHistoryWrapper, Wrapper } from './styles';

const UrlListing: React.FC = () => {
  return (
    <Wrapper>
      <Text title="History" fontWeight="600" fontSize="20px" />
      <UrlsHistoryWrapper>
        <Text title="History" />
        <Text title="History" />
        <Text title="History" />
        <Text title="History" />
      </UrlsHistoryWrapper>
    </Wrapper>
  );
};

export default UrlListing;
