import React from 'react';
import * as S from './style';
import LogoImg from '../../assets/images/main_logo.svg';
import UserImg from '../../assets/images/person_icon.svg';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.LogoImage src={LogoImg} alt='For Your Amusement' />
      <S.UserIcon src={UserImg} alt='사용자 아이콘' />
    </S.HeaderWrapper>
  );
}
