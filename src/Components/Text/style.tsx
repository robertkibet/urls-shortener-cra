import styled from '@emotion/styled';

export interface TextProps {
  fontWeight?: string;
  fontSize?: string;
  title?: string;
}
export const StyledText = styled.p<TextProps>`
  line-height: 24px;
  padding: 0;
  margin: 0;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
`;
