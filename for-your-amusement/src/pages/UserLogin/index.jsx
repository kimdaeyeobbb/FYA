import React, { useState, useEffect } from 'react';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import MainLogo from '../../assets/images/login_logo.svg';
import IdIcon from '../../assets/images/ID_icon.svg';
import PwIcon from '../../assets/images/PW_icon.png';
import * as S from './style';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet-async";

export default function UserLogin() {
  const [userId, setUserId] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [userIdValid, setUserIdValid] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    const userIdRex = /^[a-z0-9]{6,20}/;

    if (userId === ''){
      setUserIdError('')
    } else if (!userIdRex.test(userId)) {
      setUserIdError('아이디는 6~20자 이내입니다.');
      setUserIdValid(false);
    } else {
      setUserIdError('');
      setUserIdValid(true);
    }
  }, [userId]);

  useEffect(() => {
    const passwordRex = /^[a-zA-Z0-9]{8,20}$/;

  if (password == ''){
    setPasswordError('');
  } else if (!passwordRex.test(password)) {
      setPasswordError('비밀번호는 8~16자 이내입니다.');
      setPasswordValid(false);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  }, [password]);

  console.log(userId, password);
  console.log(userIdValid, passwordValid);

  return (
    <>
      <S.FormContainer>
        <S.PageTitle className='ir'>FYA 로그인 화면</S.PageTitle>
        <Link to='/'>
          <S.LogoImg src={MainLogo} alt='로고 이미지' />
        </Link>
        <S.InputForm>
          <InputBox
            id='userId'
            type='text'
            imgSrc={IdIcon}
            imgAlt='아이디'
            placeholder='아이디'
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          {!userIdValid && (
            <S.ErrMsg className='message'>{userIdError}</S.ErrMsg>
          )}
          <InputBox
            id='password'
            type='password'
            imgSrc={PwIcon}
            imgAlt='비밀번호'
            placeholder='비밀번호'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {!passwordValid && (
            <S.ErrMsg className='message'>{passwordError}</S.ErrMsg>
          )}
          <Button
            disabled={!userIdValid || !passwordValid ? true : false}
            message='로그인'
          ></Button>
        </S.InputForm>
        <S.SignupLink to='/usersignup'>회원가입</S.SignupLink>
      </S.FormContainer>
    </>
  );
}
