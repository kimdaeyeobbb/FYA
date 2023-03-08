import React, { useState, useEffect } from "react";
import fya from "../../assets/images/login_logo.svg";
import * as S from "./style";

export function LongBtn({ disabled = true, message }) {
  return (
    <>
      {disabled ? (
        <S.DisabledBtn>{message}</S.DisabledBtn>
      ) : (
        <S.AbledBtn>{message}</S.AbledBtn>
      )}
    </>
  );
}

export function InputBox({ type = "text", useRef, ...props }) {
  return (
    <>
      <S.InputContainer>
        <S.Input type={type} ref={useRef} {...props} />
      </S.InputContainer>
    </>
  );
}

export default function UserLogin(props) {
  const [userId, setUserId] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [userIdValid, setUserIdValid] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordValid, setPasswordValid] = useState("");

  useEffect(() => {
    const userIdRex = /^[a-z0-9]{6,20}/;

    if (!userIdRex.test(userId) && userId !== "") {
      setUserIdError("아이디는 6~20자 이내입니다.");
      setUserIdValid(false);
    } else {
      setUserIdError("");
      setUserIdValid(true);
    }
  }, [userId]);

  useEffect(() => {
    const passwordRex = /^[a-zA-Z0-9]{8,20}$/;

    if (!passwordRex.test(passwordRex)) {
      setPasswordError("비밀번호는 8~16자 이내입니다.");
      setPasswordValid(false);
    } else {
      setPasswordError("");
      setPasswordValid(true);
    }
  }, [password]);

  return (
    <>
      <S.FormContainer>
        <S.PageTitle className="ir">FYA 회원가입 화면</S.PageTitle>
        <S.TitleImg src={fya} alt="로고 이미지" />
        <S.InputForm>
          <InputBox
            id="userId"
            placeholder="아이디"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <S.ErrMsg className="message">{userIdError}</S.ErrMsg>
          <InputBox
            type="password"
            id="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <S.ErrMsg className="message">{passwordError}</S.ErrMsg>
        </S.InputForm>
        <LongBtn
          disabled={userIdValid && passwordValid ? false : true}
          message="로그인"
        ></LongBtn>
        <S.signUp to="/usersignup">회원가입</S.signUp>
      </S.FormContainer>
    </>
  );
}
