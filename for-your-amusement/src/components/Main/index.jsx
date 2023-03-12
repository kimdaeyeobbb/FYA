import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestThumbnail from '../../assets/images/test_thumbnail.jpeg';
import reactionThumbnail from '../../assets/images/reactionThumbnail_img.png'
import lottoThumbnail from '../../assets/images/lottoThumbnail_img.png'
import rspThumbnail from '../../assets/images/rspThumbnail_img.png'
import * as S from './style';

export const game_data = [

  {
    id: 1,
    title: '반응속도체크',
    thumbnail: reactionThumbnail,
  },
  {
    id: 2,
    title: '가위바위보',
    thumbnail: rspThumbnail,
  },
  {
    id: 3,
    title: '로또추첨기',
    thumbnail: lottoThumbnail,
  },
  {
    id: 4,
    title: 'Comming Soon',
    thumbnail: '',
  },
  {
    id: 5,
    title: 'Comming Soon',
    thumbnail: '',
  },
  {
    id: 6,
    title: 'Comming Soon',
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
      <S.MainGameListContainer>
        {gameData.map((data) => (
          <S.MainGameList>
            <Link to='/'>
              <S.MainGameThumbnail
                src={data.thumbnail}
                alt={data.title || 'Comming Soon'}
              />
              <S.MainGameTitle>{data.title || 'Comming Soon'}</S.MainGameTitle>
            </Link>
          </S.MainGameList>
        ))}
      </S.MainGameListContainer>
    </S.MainContainer>
  );
}
