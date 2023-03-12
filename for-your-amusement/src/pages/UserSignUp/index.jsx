import React, { useState, useEffect } from 'react';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import MainLogo from '../../assets/images/login_logo.svg';
import IdIcon from '../../assets/images/ID_icon.svg';
import NameIcon from '../../assets/images/name_icon.svg';
import PwIcon from '../../assets/images/PW_icon.png';
import * as S from './style';
import { Link } from 'react-router-dom';

export default function UserSignUp() {
  const [userId, setUserId] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [userIdValid, setUserIdValid] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    const userIdRex = /^[a-z0-9]{6,20}/;

    if (!userIdRex.test(userId) && userId !== '') {
      setUserIdError('6~20자의 영문 소문자+숫자만 사용 가능합니다.');
      setUserIdValid(false);
    } else {
      setUserIdError('');
      setUserIdValid(true);
    }
  }, [userId]);

  useEffect(() => {
    const passwordRex =
        /^[a-zA-Z0-9]{8,20}$/;

    if (!passwordRex.test(password)) {
      setPasswordError(
        '8~16자의 영문 대 소문자, 숫자, 특수문자만 사용 가능합니다.'
      );
      setPasswordValid(false);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  }, [password]);

  return (
    <S.FormContainer>
      <S.PageTitle className='ir'>FYA 회원가입 화면</S.PageTitle>
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
        {!userIdValid && <S.ErrMsg className='message'>{userIdError}</S.ErrMsg>}
        <InputBox
          id='nickname'
          type='text'
          imgSrc={NameIcon}
          imgAlt='닉네임'
          placeholder='닉네임'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {!nameValid && <S.ErrMsg className='message'>{nameError}</S.ErrMsg>}
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
        <InputBox
          id='passwordCheck'
          type='password'
          imgSrc={PwIcon}
          imgAlt='비밀번호 확인'
          placeholder='비밀번호 확인'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {!passwordValid && (
          <S.ErrMsg className='message'>{passwordError}</S.ErrMsg>
        )}
        <Button
          disabled={!userIdValid || !passwordValid ? true : false}
          message='회원가입'
        ></Button>
      </S.InputForm>
      <S.LoginLink to='/userlogin'>로그인</S.LoginLink>
    </S.FormContainer>
  );
}
