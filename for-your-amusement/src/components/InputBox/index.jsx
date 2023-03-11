import * as S from './style';

export default function InputBox({ type = 'text', useRef, ...props }) {
  return (
    <S.InputLabel htmlFor={props.id}>
      <S.InputIconImg src={props.imgSrc} alt={props.imgAlt} />
      <S.Input id={props.id} type={type} ref={useRef} {...props} />
    </S.InputLabel>
  );
}
