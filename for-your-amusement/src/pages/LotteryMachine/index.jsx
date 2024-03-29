import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  memo,
} from 'react';
import * as S from './style';
import GameHeader from '../../components/GameHeader';
import GameCommon from '../../components/GameCommon';
import GameLayout from '../../components/GameLayout';
import { Helmet } from "react-helmet-async";
import He from "styled-components/dist/styled-components.browser.esm";

export default function LotteryMachine() {
  /* 로또 당첨숫자 뽑기 */
  const getWinNumbers = () => {
    console.log('당첨숫자');
    const candidate = Array(45)
      .fill()
      .map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(
        candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
      );
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  };

  /* 로또 공 - 함수 컴포넌트 (memo쓰면 pure component) */
  const Ball = memo(({ number }) => {
    let background;
    if (number <= 7) {
      background = '#F2C643';
    } else if (number <= 14) {
      background = '#81C6EE';
    } else if (number <= 21) {
      background = '#EE7A76';
    } else if (number <= 28) {
      background = '#AAAAAA';
    } else if (number <= 35) {
      background = '#B8D75B';
    } else if (number <= 42) {
      background = '#B121B6';
    } else {
      background = '#FF7408';
    }

    return (
      // <div className="ball" style={{ background }}>{number}</div>
      <S.BallDetail style={{ backgroundColor: background }}>
        <S.BallNumber>{number}</S.BallNumber>
      </S.BallDetail>
    );
  });

  /* Lotto 추첨 */
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    console.log('useEffect');
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

  useEffect(() => {
    console.log('로또 숫자를 생성합니다.');
  }, [winNumbers]);

  const onClickRedo = useCallback(() => {
    console.log('onClickRedo');
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
      <>
      <Helmet>
        <title>로또추첨기</title>
      </Helmet>
    <GameLayout>
      <GameHeader gameTitle='로또추첨기' />
      <S.TopBar>
        {redo && <S.Button onClick={onClickRedo}>한 번 더!</S.Button>}
      </S.TopBar>
      <S.ResultSection id='result'>
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </S.ResultSection>
      <S.BonusText id='bonus'>보너스!</S.BonusText>
      <S.ResultSection>
        {bonus && <Ball number={bonus} onClick={onClickRedo} />}
      </S.ResultSection>
      <GameCommon gameDesc='로또 번호를 하나씩 차례대로 선택하고 로또 번호와 일치하는 번호가 가장 많은 팀이 승리합니다.' />
    </GameLayout>
      </>
  );
}
