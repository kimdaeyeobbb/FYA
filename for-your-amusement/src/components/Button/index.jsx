import * as S from './style';

export default function Button({ disabled = true, message }) {
  return (
    <>
      {disabled ? (
        <S.DisabledBtn>{message}</S.DisabledBtn>
      ) : (
        <S.AbledBtn>{message}</S.AbledBtn>
      )}
    </>
  );
}
