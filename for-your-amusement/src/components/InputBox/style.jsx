import styled from 'styled-components';

export const InputLabel = styled.label`
  display: inline-block;
  position: relative;
  width: inherit;
  height: 70px;
  margin-bottom: 10px;
`;

export const InputIconImg = styled.img`
  position: absolute;
  top: 20px;
  left: 25px;
  width: 20px;
  height: 30px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: inherit;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 20px 25px 20px 70px;
  font: normal normal 300 20px/30px Noto Sans CJK KR;
  color: #000;

  &::placeholder {
    color: #818181;
  }
`;
