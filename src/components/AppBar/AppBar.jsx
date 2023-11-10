import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectAuthUser, selectAuthenticated } from 'redux/authSelectors';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { Navigation } from 'components/Navigation/Navigation';
import { Header, Nav } from './AppBar.styled';

export function AppBar() {
  const authenticated= useSelector(selectAuthenticated);
  const user = useSelector(selectAuthUser)

  return (
    <Header>
      <Nav>
        <Navigation />
        {authenticated ? <UserMenu user={user}/> : <AuthForm />}
      </Nav>
    </Header>
  );
}

export default AppBar;