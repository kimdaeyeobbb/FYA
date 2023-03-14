import { useState, useRef, useEffect } from 'react';
import * as S from './style';
import GameHeader from '../../components/GameHeader';
import GameLayout from '../../components/GameLayout';
import GameCommon from '../../components/GameCommon';
import RSPimg from '../../assets/images/RSPset_img.svg';
import ChoiceRock from '../../assets/images/choice_rock.svg';
import ChoiceScissors from '../../assets/images/choice_scissors.svg';
import ChoicePaper from '../../assets/images/choice_paper.svg';
import Rock from '../../assets/images/rock.svg';
import Scissors from '../../assets/images/scissors.svg';
import Paper from '../../assets/images/paper.svg'
import BlankImg from '../../assets/images/blank_img.png'

export default function RockPaperScissors() {
  const rspCoords = {
    /* 좌표 */
    // 바위: '0',
    // 가위: '-142px',
    // 보: '-284px',
    바위: '0',
    가위: '-496px',
    보: '-892px',
  };

  const scores = {
    가위: 1,
    바위: 0,
    보: -1,
  };

  const userChoice = {
      바위: Rock,
      가위: Scissors,
      보: Paper
  }

  const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
      return v[1] === imgCoord;
    })[0];
  };

  const RSP = () => {
    const [result, setResult] = useState('');
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

    const onClickBtn = (choice) => () => {
        if(choice == '가위'){
            setUserRSP(userChoice.가위);
        } else if (choice == '바위'){
            setUserRSP(userChoice.바위);
        } else if (choice == '보'){
            setUserRSP(userChoice.보);
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
    //
    // const styles = {
    //   computer: {
    //     width: 142,
    //     height: 200,
    //     background-position: 0 0
    //   }
    // }

    return (
      <>
        <div style={{display:"inline-block",  width:240, height:80 ,background:"#6B8CBF"}}>
          컴퓨터: {comScore} VS 나: {score}
        </div>
        {/*<div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`, width: 142, height:200}} />*/}
          <div style={{display:"flex", justifyContent:"space-around", fontSize: 30, fontWeight:"bold", opacity:1}}>
            <div>computer</div>
            <div>user</div>
          </div>
          <div style={{display: "flex", justifyContent:"space-evenly"
          }}>
        <div
          id='computer'
          style={{
            background: `url(${RSPimg}) ${imgCoord} 0`,
            width: 359,
            height: 322,
              marginTop:80
              // display: "inline-block"
          }}
        ></div>
              <div style={{background:"#818181", width:1, height:500}}></div>
          <img src={userRSP} />
          </div>
        <div style={{display: "flex", justifyContent:"space-evenly", marginTop:165}}>
          <button
            id='rock'
            className='btn'
            onClick={onClickBtn('바위')}
            style={{
              background: `url(${ChoiceRock}) 0`,
              width: 180,
              height: 180,
              // marginRight: 40,
              // marginLeft: 300,
            }}
          >
            바위
          </button>
          <button
            id='scissor'
            className='btn'
            onClick={onClickBtn('가위')}
            style={{
              background: `url(${ChoiceScissors}) 0`,
              width: 180,
              height: 180,
              // marginRight: 40,
            }}
          >
            가위
          </button>
          <button
            id='paper'
            className='btn'
            onClick={onClickBtn('보')}
            style={{
              background: `url(${ChoicePaper}) 0`,
              width: 180,
              height: 180,
            }}
          >
            보
          </button>
        </div>
        <div>{result}</div>
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
