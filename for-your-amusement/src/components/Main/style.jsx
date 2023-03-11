import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 170px 155px 198px;
  background-color: red;
`;

export const MainBtnsSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const MainGameTypeContainer = styled.div``;

export const MainGameTypeBtn = styled.button`
  width: 180px;
  height: 70px;
  background: #e2e2e2 0% 0% no-repeat padding-box;
  border-radius: 43px;
  padding: 20px 51px;
  font: normal normal normal 20px/29px Noto Sans CJK KR;
  letter-spacing: 0;
  color: #818181;

  &.active {
    background: #5ba7a7 0% 0% no-repeat padding-box;
    color: #fff;
  }

  + button {
    margin-left: 20px;
  }
`;

export const MainRandomGameBtn = styled.button`
  width: 220px;
  height: 70px;
  background: #6b8cbf 0% 0% no-repeat padding-box;
  font: normal normal normal 20px/29px Noto Sans CJK KR;
  letter-spacing: 0;
  color: #fff;
`;

export const MainGameSection = styled.section`
  margin-top: 68px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 1920px;
`;
