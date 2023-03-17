import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100vh;
  margin: auto;
`;

export const PageTitle = styled.h1``;

export const LogoImg = styled.img`
  width: 326.15px;
  height: 147.03px;
`;

export const InputForm = styled.form`
  margin: 70px 0 20px;
  width: 100%;
`;

export const ErrMsg = styled.p`
  font: normal normal 300 15px/22px Noto Sans CJK KR;
  margin-left: 25px;
  margin-bottom: 18px;
  color: #ff0000;
`;

/* 회원가입 링크 */
export const SignupLink = styled(Link)`
  padding-top: 20px;
  color: #818181;
  font: normal normal 300 15px/22px Noto Sans CJK KR;
  text-decoration: underline;
  //:hover {
  //  text-decoration: underline;
  //}
`;
