import styled from 'styled-components';

export const GameMain = styled.section`
  height: 800px;
  background-color: #818181;
`;

export const GameScreen = styled.div`
  width: 1920px;
  height: 800px;
  position: absolute;
  top: 308px;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5ba7a7;
`;

export const GameMessage = styled.p`
  font: normal normal normal 50px/74px Noto Sans CJK KR;
  color: #fff;
`;

export const TargetCircle = styled.div`
  /* display: none; */
  margin-top: 60px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #d21818;
  z-index: 20;
`;

// #screen {
//     background-color:#5BA7A7;
//     /*width: 300px;*/
//     /*height: 200px;*/
//     width: 100%;
//     height: 800px;
//     text-align: center;
//     user-select: none;
// }
// #screen.waiting {
//     background-color: aqua;
// }
// #screen.ready {
//     background-color: red;
//     color: white;
// }
// #screen.now {
//     background-color: greenyellow;
// }
