import styled, { css } from 'styled-components';
import {
  MainBtnsSection,
  MainRandomGameBtn,
} from '../../components/Main/style';

export const ComRSP = styled.div`
  width: 142px;
  height: 200px;
  background-position: 0 0;
`;

export const TopBar = styled(MainBtnsSection)`
  height: 80px;
  display: flex;
  justify-content: end;
  margin-bottom: 98px;
`;

export const GameScoreContainer = styled.section`
  width: 240px;
  height: 70px;
  background: #6b8cbf 0% 0% no-repeat padding-box;
`;

export const GameScore = styled.p`
  margin-top: 17px;
  margin-bottom: 17px;
  text-align: center;
  font: normal normal normal 30px/36px Noto Sans CJK KR;
  color: #fff;
`;

export const GameBoard = styled.section`
  width: 100%;
`;

export const GameDisplay = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ComputerDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 222px;
  padding-right: 222px;
  border-right: 1px solid #818181;
`;

export const UserDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 222px;
  margin-right: 222px;
`;

export const Player = styled.h3`
  font: normal normal bold 30px/45px Noto Sans CJK KR;
  margin-bottom: 102px;
`;

export const ComputerChoice = styled.div`
  ${(props) => {
    return css`
      padding-bottom: 50px;
      width: 359px;
      height: 322px;
      background: url('https://raw.githubusercontent.com/kimdaeyeobbb/FYA/c9098b0f2b2233e12627f8142454367f9d2c264d/for-your-amusement/src/assets/images/RSPset_img.svg')
        ${props.coord}px 0 no-repeat;
    `;
  }}
`;

export const UserChoice = styled.div`
  padding-bottom: 50px;
  width: 359px;
  height: 322px;
`;

export const UserChoiceImg = styled.img`
  width: 359px;
  height: 322px;
`;

export const GameControlBar = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 165px;

  & :last-child {
    margin-right: 0;
  }
`;

export const ChoiceBtn = styled.button`
  width: 180px;
  height: 180px;
  margin-right: 40px;
`;

export const ChoiceImg = styled.img`
  width: 100%;
  height: 100%;
`;
