import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  margin-top: 30px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export const PageTitle = styled.h1``;

export const TitleImg = styled.img``;

export const SignUpTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`;

export const InputForm = styled.form`
  margin: 70px 0 30px;
`;

export const ErrMsg = styled.p`
  margin-bottom: 10px;
  color: red;
`;

export const DisabledBtn = styled.button`
  background-color: ${(props) => props.theme.disabledColor};
  color: #fff;
  cursor: not-allowed;
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 322px;
  height: 44px;
  border-radius: 44px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const AbledBtn = styled(DisabledBtn)`
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  cursor: pointer;
`;

/* InputBox */

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 322px;
  color: #767676;
  font-weight: 500;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  line-height: 15px;
`;

export const Input = styled.input`
  width: inherit;
  padding-top: 16px;
  margin-bottom: 16px;
  height: 48px;
  border: 0;
  border-bottom: 1px solid #dbdbdb;
  font-size: 14px;

  &:focus {
    outline: 0;
    border-bottom: 2px solid #4d82d4;
  }

  &::placeholder {
    position: absolute;
    bottom: 14px;
    color: #dbdbdb;
  }
`;
