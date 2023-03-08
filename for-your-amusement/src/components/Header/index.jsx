import React from "react";
import * as S from "./style";
import LogoImg from "../../assets/images/main_logo.svg";
import { ImageLogo } from "./style";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.ImageLogo src={LogoImg} alt="ForYourAmusement" />
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
