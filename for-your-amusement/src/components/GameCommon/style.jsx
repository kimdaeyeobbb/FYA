import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CommonSection = styled.section`
  width: inherit;
  margin-top: 85px;
`;

export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-bottom: 182px;
`;

export const GameDetail = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 305px;
`;

export const GameDetailTitle = styled.strong`
  display: inline-block;
  font: normal normal bold 20px/30px Noto Sans CJK KR;
  color: #000;
`;

export const GameDetailDesc = styled.p`
  margin-top: 30px;
  max-width: 700px;
  font: normal normal normal 20px/30px Noto Sans CJK KR;
  word-break: normal;
`;

export const GameMore = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

export const GameMoreText = styled.strong`
  font: normal normal bold 30px/45px Noto Sans CJK KR;
  margin-right: 18px;
`;

export const GameMoreImg = styled.img`
  width: 18.53px;
  height: 30.89px;
`;
