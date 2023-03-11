import React, {useState, useRef} from "react";
import Header from "../../components/Header";

export default function ReactionVelocityCheck() {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if(state === 'waiting'){
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');

      // useRef는 내부에 current가 있으므로 current에 넣어줘야 함
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random()*1000) + 2000);  // 2~3초 랜덤
    } else if (state === 'ready'){   // 성급하게 클릭한 경우 (마라톤에서 총을 쥐고 있는데 출발하는 케이스)
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now'){  // 반응속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });  // 예전 state를 참고하므로 함수형으로 써줄 것
    }
  }

  const onReset = () => {
    setResult([]);
  }

  const renderAverage = () => {
    return result.length === 0
        ? null
        : <>
          <div>
            평균 시간: {result.reduce((acc,cur) => acc+cur)/result.length}ms
          </div>
          <button onClick = {onReset}>리셋</button>
        </>
  }
  
  return (
    <>
      <Header/>
      <div
           id="screen"
           className={state}
           onClick={onClickScreen}>
        {message}
      </div>

      {/* jsx에서 중괄호를 치면 내부에 js를 사용할 수 있다. */}
      {/*for와 if를 return문에 쓰면 굉장히 지저분해지므로 사용하지 않는다.*/}
      {renderAverage()}
    </>
  )
}