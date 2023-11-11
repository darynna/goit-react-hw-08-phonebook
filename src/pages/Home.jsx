import { NavLink } from 'react-router-dom';
import logo from 'images/logo/logo.png'
import { HeartContainer, Wrapper } from './Home.styled';

export const Home = () =>{
    return (
        <Wrapper>
          <h1 className="tracking-in-expand-fwd">Welcome to your Phone book!</h1>
          <NavLink to={'/login'}>
            <HeartContainer
              className="heartbeat"
              src={logo}
              alt="phonebook"
              width={250}
            />
          </NavLink>
        </Wrapper>
      );
}