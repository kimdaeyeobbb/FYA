import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import * as S from './Style';

export const game_data = [
  {
    id: 1,
    title: '숫자야구',
    thumbnail: '',
  },
  {
    id: 2,
    title: '반응속도체크',
    thumbnail: '',
  },
  {
    id: 3,
    title: '가위바위보',
    thumbnail: '',
  },
  {
    id: 4,
    title: '로또추첨기',
    thumbnail: '',
  },
  {
    id: 5,
    title: '틱택토',
    thumbnail: '',
  },
  {
    id: 6,
    title: '지뢰찾기',
    thumbnail: '',
  },
  {
    id: 7,
    title: '',
    thumbnail: '',
  },
  {
    id: 8,
    title: '',
    thumbnail: '',
  },
  {
    id: 9,
    title: '',
    thumbnail: '',
  },
  {
    id: 10,
    title: '',
    thumbnail: '',
  },
  {
    id: 11,
    title: '',
    thumbnail: '',
  },
  {
    id: 12,
    title: '',
    thumbnail: '',
  },
];

export default function Main() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    setGameData(game_data);
  }, []);

  console.log(gameData);

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
      <S.MainGameSection></S.MainGameSection>
    </S.MainContainer>
  );
}
