import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
          urlHistory?.map((item: any) => (
            <CopyToClipboard key={Math.random()} text={item?.shortUrl || item?.url} onCopy={() => alert('copied')}>
              <LinkWrapper title={item?.shortUrl || item?.url} />
            </CopyToClipboard>
          ))
        ) : (
          <div>No active urls</div>
        )}
      </UrlsHistoryWrapper>
    </Wrapper>
  );
};

export default UrlListing;
