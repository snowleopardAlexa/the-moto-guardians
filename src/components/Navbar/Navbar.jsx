import { Container, NavWrapper, NavLeft, Logo, NavRight, MenuItem } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Container>
        <NavWrapper>
            <NavLeft>
                <Logo>The Moto Guardians</Logo>
            </NavLeft>
            <NavRight>
                 <MenuItem to="/">Home</MenuItem> 
                 <MenuItem to="/mission">Our Mission</MenuItem> 
                 <MenuItem to="/chapters">Chapters</MenuItem> 
                 <MenuItem to="/members">Become Member</MenuItem> 
                 <MenuItem to="/help">Help</MenuItem> 
                 <MenuItem to="/contact">Contact</MenuItem> 
            </NavRight>
        </NavWrapper>
    </Container>
  );
}

export default Navbar;