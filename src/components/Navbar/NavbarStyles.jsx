import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaQueries } from '.././responsiveStyles';

export const Container = styled.div `
   height: 80px;
   background: black;
   ${mediaQueries("md")`
      height: 50px
   `}
`;



export const NavWrapper = styled.div `
   padding: 0px 20px;
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
   color: white;
   font-family: 'Staatliches', cursive;
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

export const MenuItem = styled(Link) `
   font-family: 'Maven Pro', sans-serif;
   font-size: 1.2rem;
   font-weight: 500;
   text-decoration: none;
   display: flex;
   align-items: center;
   color: white;
   margin: 0px 5px 5px 20px;
   ${mediaQueries("md")`
     font-size: 12px;
     margin-left: 10px;
  `}
`;

