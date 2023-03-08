import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 8vh;
  /* margin-top: 30px; */
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export const PageTitle = styled.h1``;

export const TitleImg = styled.img`
  background-image: url("../../assets/images/login_logo.svg");
`;

export const InputForm = styled.form`
  margin: 70px 0 30px;
`;

export const ErrMsg = styled.p`
  margin-bottom: 10px;
  color: red;
`;

export const DisabledBtn = styled.button`
  /* background-color: ${(props) => props.theme.disabledColor};
  color: #fff;
  cursor: not-allowed;
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 500px;
  height: 70px;
  border-radius: 20px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px; */
  /* Layout Properties */
  /* Layout Properties */
  top: 688px;
  left: 710px;
  width: 500px;
  height: 70px;
  /* UI Properties */
  background: var(--unnamed-color-5ba7a7) 0% 0% no-repeat padding-box;
  background: #5ba7a7 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  color: #fff;
  font-size: 25px;
  font: Noto Sans CJK KR;
`;

export const AbledBtn = styled(DisabledBtn)`
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  cursor: pointer;
`;

/* InputBox */

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  color: #767676;
  font-weight: 500;
`;

export const Input = styled.input`
  background-color: #f8f8f8;
  border: none;
  width: inherit;
  padding-top: 16px;
  margin-bottom: 16px;
  height: 48px;
  font-size: 14px;

  &:focus {
    outline: 0;
    border: 2px solid #5ba7a7;
  }

  &::placeholder {
    position: absolute;
    bottom: 14px;
    color: #dbdbdb;
  }
`;

/* 회원가입 링크 */

export const signUp = styled(Link)`
  padding-top: 20px;
  color: #818181;
  text-decoration: underline;
  opacity: 1;
  letter-spacing: 0px;
  font: normal normal 300 15px/22px Noto Sans CJK KR;
  text-align: left;
`;
