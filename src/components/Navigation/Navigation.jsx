import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { selectAuthenticated } from 'redux/authSelectors';
import logo from 'images/logo/logo.png'
import { StyledLink, StyledNavLink, } from './Navigation.styled';

export function Navigation() {

  const authenticated = useSelector(selectAuthenticated);

  return (


    <StyledNavLink>
      <StyledLink to="/" exact >
        <img src={logo} alt="logo" width='24px'/>
        <p>PhoneBook</p>
      </StyledLink>
      <StyledLink to="/" exact >
        <p>Home</p>
      </StyledLink>

      {authenticated && (
        <Link
          to="/contacts"
          exact        
        >
          Contacts
        </Link>
      )}
    </StyledNavLink>
  );
}