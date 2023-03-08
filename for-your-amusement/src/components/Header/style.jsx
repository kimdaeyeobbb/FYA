import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;
`;

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid rgb(219, 219, 219);
`;

export const ImageLogo = styled.image`
  width: 50px;
  height: 50px;
  //
`;

// // SearchBtn
// export const SearchBtn = styled(Link)`
//   width: 24px;
//   height: 24px;
//   background-image: url("../../assets/images/person_icon.svg")
//   margin-left: auto;
// `;

// export const SearchInp = styled.input`
//   padding: 7px 16px;
//   margin-left: auto;
//   width: 100%;
//   background: #f2f2f2;
//   border-radius: 32px;
//   font-size: 14px;
//   border: 0;
// `;
// // HeaderTitle
// export const HeaderTit = styled.h1`
//   font-size: 18px;
//   font-weight: 500;
//   margin-top: 2px;
// `;
