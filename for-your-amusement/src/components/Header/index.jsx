import { Link } from 'react-router-dom';
import * as S from './style';
import LogoImg from '../../assets/images/main_logo.svg';
import UserImg from '../../assets/images/person_icon.svg';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <Link to='/'>
        <S.LogoImage src={LogoImg} alt='For Your Amusement' />
      </Link>
      <Link to='/userlogin'>
        <S.UserIcon src={UserImg} alt='사용자 아이콘' />
      </Link>
    </S.HeaderWrapper>
  );
}
