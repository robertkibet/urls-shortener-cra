import styled from '@emotion/styled';

export const MainLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;
export const Container = styled.div`
  display: block;
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;

  @media (max-width: 600px) {
    display: grid;
    grid-template-rows: 200px 1fr;
    justify-items: center;
    align-items: center;
  }
`;
