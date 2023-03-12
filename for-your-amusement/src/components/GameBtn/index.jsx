import * as S from './style';

export default function GameBtn({ imgSrc, imgAlt }) {
  return (
    <S.Button>
      <S.ButtonImg src={imgSrc} alt={imgAlt} />
      {imgAlt}
    </S.Button>
  );
}
