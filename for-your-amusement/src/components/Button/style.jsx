import styled from 'styled-components';

export const DisabledBtn = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 16px 0;
  display: inline-block;
  text-align: center;
  background: #96c9c9 0% 0% no-repeat padding-box;
  border-radius: 20px;
  color: #fff;
  font-size: 25px;
  font: normal normal bold 25px/37px Noto Sans CJK KR;
`;

export const AbledBtn = styled(DisabledBtn)`
  /* background-color: ${(props) => props.theme.mainColor}; */
  background-color: #5ba7a7;
  color: #fff;
  cursor: pointer;
`;
