import { HeaderSt, NavLinkSt, NavWrapSt } from './Header.styled';

const Header = () => {
  return <HeaderSt>
    <NavWrapSt>
      <NavLinkSt to="/" style={{ marginRight: "20px"}}>ADD CONTACT</NavLinkSt>
      <NavLinkSt to="/phonebook">PHONEBOOK</NavLinkSt>
    </NavWrapSt>
  </HeaderSt>
}

export default Header;