import styled from 'styled-components';
import { mediaQueries } from '.././responsiveStyles';

export const Container = styled.div `
   height: 80px;
   background: black;
   ${mediaQueries("md")`
      height: 50px
   `}
`;

export const NavWrapper = styled.div `
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   ${mediaQueries("md")`
      padding: "10px 0px"
  `}
`;

export const NavLeft = styled.div `
   flex: 1;
   display: flex;
   align-items: center;
`;

export const Logo = styled.h1 `
   font-weight: bold;
   ${mediaQueries("md")`
     font-size: 18px;
     margin-top: 5px;
  `}
`;

export const NavRight = styled.div `
   flex: 1;
   display: flex;
   justify-content: flex-end;
   ${mediaQueries("md")`
     flex: 2,
  `}
`;

export const MenuItem = styled.div `
   font-size: 1rem;
   margin-top: 7px;
   cursor: pointer;
   margin-left: 25px;
   ${mediaQueries("md")`
     font-size: 12px;
     margin-left: 10px;
  `}
`;