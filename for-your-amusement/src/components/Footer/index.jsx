import FooterLogo from '../../assets/images/footer_logo.svg';
import * as S from './style';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterTop>
        <S.FooterImg src={FooterLogo} alt='For Your Amusement - Action' />
      </S.FooterTop>
      <S.FooterBottom>
        <S.FooterDictList>
          <S.FooterDictTitle>상호</S.FooterDictTitle>
          <S.FooterDictDefinition>
            FYA(For Your Amusement·Action)
          </S.FooterDictDefinition>
          <S.FooterDictTitle>제작자</S.FooterDictTitle>
          <S.FooterDictDefinition>팀명</S.FooterDictDefinition>
        </S.FooterDictList>
        <S.FooterDictList>
          <S.FooterDictTitle className='ir'>저작권</S.FooterDictTitle>
          <S.FooterDictDefinition>
            Copyright &copy; FYA(For Your Amusement·Action)
          </S.FooterDictDefinition>
        </S.FooterDictList>
      </S.FooterBottom>
    </S.FooterContainer>
  );
}
