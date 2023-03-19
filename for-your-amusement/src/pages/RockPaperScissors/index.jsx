import { useState, useRef, useEffect } from 'react';
import * as S from './style';
import GameHeader from '../../components/GameHeader';
import GameLayout from '../../components/GameLayout';
import GameCommon from '../../components/GameCommon';
import Rock from '../../assets/images/rock.svg';
import Scissors from '../../assets/images/scissors.svg';
import Paper from '../../assets/images/paper.svg';
import BeforeRock from '../../assets/images/choice_rock.svg';
import BeforeScissors from '../../assets/images/choice_scissors.svg';
import BeforePaper from '../../assets/images/choice_paper.svg';

import AfterRock from '../../assets/images/choice_rock_after.svg';
import AfterScissors from '../../assets/images/choice_scissors_after.svg';
import AfterPaper from '../../assets/images/choice_paper_after.svg';
import BlankImg from '../../assets/images/blank_img.png';
import { Helmet } from "react-helmet-async";

export default function RockPaperScissors() {
  const rspCoords = {
    /* 좌표 */
    // 바위: '0',
    // 가위: '-142px',
    // 보: '-284px',
    바위: '0',
    가위: '-428',
    보: '-892',
  };

  const scores = {
    바위: 0,
    가위: 1,
    보: -1,
  };

  const userChoice = {
    바위: Rock,
    가위: Scissors,
    보: Paper,
  };

  const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
      return v[1] === imgCoord;
    })[0];
  };

  const RSP = () => {
    // 결과 확인용 result
    const [result, setResult] = useState('');
    const [select, setSelect] = useState({
      바위: false,
      가위: false,
      보: false,
    });
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const [comScore, setComScore] = useState(0);
    const [userRSP, setUserRSP] = useState(BlankImg);
    const interval = useRef();

    useEffect(() => {
      // console.log('다시 실행');
      interval.current = setInterval(changeHand, 100);
      return () => {
        // console.log('종료');
        clearInterval(interval.current);
      };
    }, [imgCoord]);

    const changeHand = () => {
      if (imgCoord === rspCoords.바위) {
        setImgCoord(rspCoords.가위);
      } else if (imgCoord === rspCoords.가위) {
        setImgCoord(rspCoords.보);
      } else if (imgCoord === rspCoords.보) {
        setImgCoord(rspCoords.바위);
      }
    };

    const handleClickBtn = (choice) => () => {
      if (choice === '가위') {
        setUserRSP((prev) => (prev = userChoice.가위));
      } else if (choice === '바위') {
        setUserRSP((prev) => (prev = userChoice.바위));
      } else if (choice === '보') {
        setUserRSP((prev) => (prev = userChoice.보));
      }
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
          setResult('비겼습니다!');
        } else if ([-1, 2].includes(diff)) {
          setResult('이겼습니다!');
          setScore((prevScore) => prevScore + 1);
          // setComScore((prevScore) => prevScore - 1);
        } else {
          setResult('졌습니다!');
          // setScore((prevScore) => prevScore - 1);
          setComScore((prevScore) => prevScore + 1);
        }
        setTimeout(() => {
          interval.current = setInterval(changeHand, 100);
        }, 1000);
      }
    };

    const handleToggle = (e) => {
      const myChoice = e.target.alt;
      if (myChoice === '바위') {
        setSelect((prev) => (prev = { 바위: true, 가위: false, 보: false }));
      } else if (myChoice === '가위') {
        setSelect((prev) => (prev = { 바위: false, 가위: true, 보: false }));
      } else if (myChoice === '보') {
        setSelect((prev) => (prev = { 바위: false, 가위: false, 보: true }));
      }
    };

    return (
      <>
        <Helmet>
          <title>가위바위보</title>
        </Helmet>
        <S.TopBar>
          <S.GameScoreContainer>
            <S.GameScore>{`${comScore} : ${score}`}</S.GameScore>
          </S.GameScoreContainer>
        </S.TopBar>
        <S.GameBoard>
          <S.GameDisplay>
            <S.ComputerDisplay>
              <S.Player>Computer</S.Player>
              <S.ComputerChoice coord={imgCoord}></S.ComputerChoice>
            </S.ComputerDisplay>
            <S.UserDisplay>
              <S.Player>User</S.Player>
              <S.UserChoice>
                <S.UserChoiceImg src={userRSP} alt='' />
              </S.UserChoice>
            </S.UserDisplay>
          </S.GameDisplay>
          <S.GameControlBar>
            <S.ChoiceBtn aria-label='바위' onClick={handleClickBtn('바위')}>
              <S.ChoiceImg
                onClick={(e) => handleToggle(e)}
                src={select.바위 ? AfterRock : BeforeRock}
                alt='바위'
              />
            </S.ChoiceBtn>
            <S.ChoiceBtn aria-label='가위' onClick={handleClickBtn('가위')}>
              <S.ChoiceImg
                onClick={(e) => handleToggle(e)}
                src={select.가위 ? AfterScissors : BeforeScissors}
                alt='가위'
              />
            </S.ChoiceBtn>
            <S.ChoiceBtn aria-label='보' onClick={handleClickBtn('보')}>
              <S.ChoiceImg
                onClick={(e) => handleToggle(e)}
                src={select.보 ? AfterPaper : BeforePaper}
                alt='보'
              />
            </S.ChoiceBtn>
          </S.GameControlBar>
          {/* 결과 확인용 */}
          {/* <div>{result}</div> */}
        </S.GameBoard>
        {/*<div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`, width: 142, height:200}} />*/}
      </>
    );
  };

  return (
    <GameLayout>
      <GameHeader gameTitle='가위바위보' />
      <RSP />
      <GameCommon gameDesc='화면의 가위바위보 중 원하는 것을 선택하여 컴퓨터가 내는 것을 이기면 됩니다.' />
    </GameLayout>
  );
}
