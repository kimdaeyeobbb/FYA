import { useState, useRef } from 'react';
import GameHeader from '../../components/GameHeader';
import GameCommon from '../../components/GameCommon';
import GameLayout from '../../components/GameLayout';
import * as S from './style';

export default function ReactionVelocityCheck() {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState(
    '시작하시려면 현재 화면을 클릭하세요.'
  );
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');

      // useRef는 내부에 current가 있으므로 current에 넣어줘야 함
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
    } else if (state === 'ready') {
      // 성급하게 클릭한 경우 (마라톤에서 총을 쥐고 있는데 출발하는 케이스)
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now') {
      // 반응속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      }); // 예전 state를 참고하므로 함수형으로 써줄 것
    }
  };

  const onReset = () => {
    setResult([]);
  };

  // 지형: 게임이 끝난 뒤 평균 반응속도에 대한 결과값은 message로 나타내는 것이 좋을 것 같습니다
  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간: {result.reduce((acc, cur) => acc + cur) / result.length}ms
        </div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <GameLayout>
      <GameHeader gameTitle='반응속도체크' />
      <S.GameMain>
        <S.GameScreen className={state} onClick={onClickScreen} style={{}}>
          <S.GameMessage>{message}</S.GameMessage>
          {/* TargetCircle은 게임 시작과 끝 사이에만 렌더링이 되도록 조건부 렌더링을 구현하시는 것이 좋을 것 같습니다 */}
          {/* 만일 조건부 렌더링을 하였음에도 불구하고 게임이 시작되기 이전에 레이아웃을 잡아먹는다면 display: none을 시작과 끝에 적용하세요  */}
          <S.TargetCircle></S.TargetCircle>
        </S.GameScreen>
      </S.GameMain>

      {renderAverage()}
      {/*<renderAverage/>*/}
      <GameCommon
        gameDesc={`시각적 자극에 대한 반응 속도를 알 수 있는 간단한 게임입니다.\n 빨간색 원이 노란색 원으로 바뀌는 순간, 그 즉시 클릭하세요.`}
      />
    </GameLayout>
  );
}
