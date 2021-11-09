import styled from '@emotion/styled';
import Button from '../../Components/Button';
import themeColors from '../../Theme';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;
export const UrlsHistoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled(Button)`
  height: 30px;
  min-width: 60px;
  width: max-content;
  border-radius: 25px;
  background-color: ${themeColors.secondary};
  color: ${themeColors.black};
`;
