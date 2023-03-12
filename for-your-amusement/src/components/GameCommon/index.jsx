import GameBtn from '../GameBtn';
import * as S from './style';
import LikeImg from '../../assets/images/like_icon.svg';
import ShareImg from '../../assets/images/share_icon.svg';

export default function GameCommon() {
  return (
    <S.CommonSection>
      <S.ButtonContainer>
        <GameBtn imgSrc={LikeImg} imgAlt='좋아요' />
        <GameBtn imgSrc={ShareImg} imgAlt='공유' />
      </S.ButtonContainer>
    </S.CommonSection>
  );
}
