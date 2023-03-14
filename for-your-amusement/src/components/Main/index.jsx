import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DefaultImg from '../../assets/images/default_image.svg';

import * as S from './style';

export default function Main({ games }) {
  const [gameData, setGameData] = useState(games);

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
        {gameData.map((game) => (
          <S.MainGameList key={uuidv4()}>
            <Link to={`${game.path}`}>
              <S.MainGameThumbnail
                src={game.thumbnail || DefaultImg}
                alt={game.title || 'Comming Soon'}
              />
              <S.MainGameTitle>{game.title || 'Comming Soon'}</S.MainGameTitle>
            </Link>
          </S.MainGameList>
        ))}
      </S.MainGameListContainer>
    </S.MainContainer>
  );
}
