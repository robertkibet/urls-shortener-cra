import styled from '@emotion/styled';
import Button from '../../Components/Button';

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

export const InputWrapper = styled.div`
  width: 100%;
`;
