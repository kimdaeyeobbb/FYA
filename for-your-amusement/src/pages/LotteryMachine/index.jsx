import React, {useState, useEffect, useRef, useMemo, useCallback, memo} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LotteryMachine() {
  /* 로또 당첨숫자 뽑기 */
  const getWinNumbers = () => {
    console.log('당첨숫자');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }

  /* 로또 공 - 함수 컴포넌트 (memo쓰면 pure component) */
  const Ball = memo(({number}) => {
    let background;
    if (number <= 10) {
      background = 'red';
    } else if (number <= 20) {
      background = 'orange';
    } else if (number <= 30) {
      background = 'yellow';
    } else if (number <= 40) {
      background = 'blue';
    } else {
      background = 'green';
    }
    return (
        <div
            className="ball"
            style={{background}}>
          {number}
        </div>
    )
  })

  const Lotto = () => {
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
  }

  let winBalls;
  let bonus;
  let redo;
  return (
      <>
        <Header/>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v}/>)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} onClick={<onClickRedo/>}/>}
        {redo && <button onClick={<onClickRedo/>}>한 번 더!</button>}
        <Footer/>
      </>
  )

}