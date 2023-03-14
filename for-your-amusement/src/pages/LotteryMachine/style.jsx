import styled from 'styled-components';
import {
  MainBtnsSection,
  MainRandomGameBtn,
} from '../../components/Main/style';

export const TopBar = styled(MainBtnsSection)`
  height: 168px;
  justify-content: end;
  margin-bottom: 98px;
`;

export const Button = styled(MainRandomGameBtn)``;

export const ResultSection = styled.section`
  margin-right: auto;
  height: 230px;

  & :nth-child(6) {
    margin-right: 0;
  }
`;

export const BallDetail = styled.div`
  position: relative;
  display: inline-block;
  width: 230px;
  height: 230px;
  margin-top: auto;
  margin-right: 46px;
  border-radius: 50%;
  background: #000 0% 0% no-repeat padding-box;
`;

export const BallNumber = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  color: #fff;
`;

export const BonusText = styled.h3`
  margin-top: 67px;
  margin-bottom: 20px;
  font: normal normal bold 30px/45px Noto Sans CJK KR;
`;
