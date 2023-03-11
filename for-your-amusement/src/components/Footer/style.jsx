import styled from 'styled-components';

export const FooterContainer = styled.footer`
  box-sizing: inherit;
  width: 100%;
  padding: 79.84px 155px 83px;
  background: #828282 0% 0% no-repeat padding-box;
`;

export const FooterTop = styled.section`
  width: 100%;
  padding-bottom: 62px;
  border-bottom: 1px solid #fff;
`;

export const FooterImg = styled.img`
  width: 220px;
  height: 99.17px;
`;

export const FooterBottom = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 62px;
`;

export const FooterDictList = styled.dl`
  display: flex;
  font: normal normal normal 20px/29px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #ffffff;

  > dd {
    margin-right: 80px;
  }

  & :last-child {
    margin: 0;
  }
`;

export const FooterDictTitle = styled.dt`
  :after {
    content: ' | ';
  }
`;

export const FooterDictDefinition = styled.dd``;
