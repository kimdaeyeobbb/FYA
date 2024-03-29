import styled from 'styled-components';

export const MainContainer = styled.main`
  box-sizing: inherit;
  width: 100%;
  margin: 0 auto;
  padding: 170px 155px 198px;
`;

export const MainBtnsSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const MainGameTypeContainer = styled.div``;

export const MainGameTypeBtn = styled.button`
  //width: 180px;
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
  width: 240px;
  height: 70px;
  background: #6b8cbf 0% 0% no-repeat padding-box;
  font: normal normal normal 20px/29px Noto Sans CJK KR;
  letter-spacing: 0;
  color: #fff;
`;

export const MainGameListContainer = styled.ul`
  margin-top: 68px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const MainGameList = styled.li`
  position: relative;
  width: 380px;
  height: 380px;
  background: #e2e2e2 0% 0% no-repeat padding-box;
  border-radius: 20px;
  overflow: hidden;
`;

export const MainGameTitle = styled.strong`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: block;
  text-align: center;
  font: normal normal normal 30px/45px Noto Sans CJK KR;
  letter-spacing: 0;
  color: #fff;
`;

export const MainGameThumbnail = styled.img`
  opacity: 0.9;
  width: 100%;
  height: 100%;
`;
