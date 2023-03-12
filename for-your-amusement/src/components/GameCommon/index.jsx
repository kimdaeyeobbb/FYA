import GameBtn from '../GameBtn';
import * as S from './style';
import LikeImg from '../../assets/images/like_icon.svg';
import ShareImg from '../../assets/images/share_icon.svg';
import ArrowImg from '../../assets/images/arrow_icon.svg';

export default function GameCommon({ gameDesc }) {
  return (
    <S.CommonSection>
      <S.ButtonContainer>
        <GameBtn imgSrc={LikeImg} imgAlt='좋아요' />
        <GameBtn imgSrc={ShareImg} imgAlt='공유' />
      </S.ButtonContainer>
      <S.GameDetail>
        <S.GameDetailTitle>게임 설명</S.GameDetailTitle>
        <S.GameDetailDesc>{gameDesc}</S.GameDetailDesc>
      </S.GameDetail>
      <S.GameMore to='/'>
        <S.GameMoreText>게임 전체보기</S.GameMoreText>
        <S.GameMoreImg src={ArrowImg} alt='' />
      </S.GameMore>
    </S.CommonSection>
  );
}
