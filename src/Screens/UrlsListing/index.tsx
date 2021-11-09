import React from 'react';
import { UrlsHistoryWrapper, Wrapper, LinkWrapper } from './styles';

interface UrlHistoryProps {
  urlHistory: {
    url?: string; // I assume ID is defined elsewhere
  }[];
}
const UrlListing: React.FC<UrlHistoryProps> = ({ urlHistory }) => {
  return (
    <Wrapper>
      <UrlsHistoryWrapper>
        {urlHistory?.length > 0 ? (
          urlHistory?.map((item: any) => <LinkWrapper title={item?.url} key={item?.url} />)
        ) : (
          <div>No active urls</div>
        )}
      </UrlsHistoryWrapper>
    </Wrapper>
  );
};

export default UrlListing;
