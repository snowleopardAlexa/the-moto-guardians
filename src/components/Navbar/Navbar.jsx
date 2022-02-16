import { Link } from 'react-router-dom';
import { Container, NavWrapper, NavLeft, Logo, NavRight, MenuItem } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Container>
        <NavWrapper>
            <NavLeft>
                <Logo>The Moto Guardians</Logo>
            </NavLeft>
            <NavRight>
                <MenuItem>Home</MenuItem>
                <MenuItem>Our Mission</MenuItem>
                <MenuItem>Chapters</MenuItem>
                <MenuItem>Become Member</MenuItem>
                <MenuItem>Help</MenuItem>
                <MenuItem>Contact</MenuItem>
            </NavRight>
        </NavWrapper>
    </Container>
  );
}

export default Navbar;