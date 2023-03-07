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
        <S.Label htmlFor={props.id}>{props.labelText}</S.Label>
        <S.Input type={type} ref={useRef} {...props} />
      </S.InputContainer>
    </>
  );
}

export default function UserSignUp(props) {
  const [userId, setUserId] = useState("");

  const [userIdError, setUserIdError] = useState("");
  const [userIdValid, setUserIdValid] = useState("");

  useEffect(() => {
    const idRex = /^[a-z0-9]{6,20}/;

    if (!idRex.test(userId) && userId !== "") {
      setUserIdError("6~20자의 영문 소문자+숫자만 사용 가능합니다");
      setUserIdValid(false);
    } else {
      setUserIdError("");
      setUserIdValid(true);
    }
  }, [id]);

  return (
    <S.FormContainer>
      <S.PageTitle className="ir">FYA 회원가입 화면</S.PageTitle>
      <S.TitleImg src={fya} alt="로고 이미지" />
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.InputForm>
        <InputBox
          id="userId"
          labelText="사용자아이디"
          placeholder="아이디"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <S.ErrMsg className="message">{userIdError}</S.ErrMsg>
        <InputBox
          type="password"
          id="password"
          labelText="비밀번호"
          placeholder="비밀번호를 설정해주세요"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <S.ErrMsg className="message">{passwordError}</S.ErrMsg>
      </S.InputForm>
      <LongBtn
        disabled={idValid && passwordValid ? false : true}
        onClick={sendData}
        message="회원가입"
      ></LongBtn>
    </S.FormContainer>
  );
}