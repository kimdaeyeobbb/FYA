import React from 'react';
import * as S from './style';

const index = () => {
  return (
    <S.MainContainer>
      <S.MainBtnsSection>
        <S.MainGameTypeContainer>
          <S.MainGameTypeBtn className='active' type='button'>
            최신게임
          </S.MainGameTypeBtn>
          <S.MainGameTypeBtn type='button'>인기게임</S.MainGameTypeBtn>
        </S.MainGameTypeContainer>
        <S.MainRandomGameBtn type='button'>랜덤 게임뽑기</S.MainRandomGameBtn>
      </S.MainBtnsSection>
      <S.MainGameSection>게임들</S.MainGameSection>
    </S.MainContainer>
  );
};

export default index;
