import { NavLink, useParams } from 'react-router-dom';
import css from './Auth.module.css';
import { Register } from './Register';
import { Login } from './Login';

export const AuthNav = () => {
  const { id } = useParams();
  // const location = useLocation();
  // const isActive = path => {
  //   return location.pathname === path ? 'active' : '';
  // };

  return (
    <div className={css.authForm}>
      <div className={css.authNav}>
        <NavLink
          // className={isActive('/auth/register')}
          className={css.authLink1}
          to="/auth/register"
        >
          Registration
        </NavLink>
        <NavLink
          className={css.authLink2}
          // className={isActive('/auth/login')}
          to="/auth/login"
        >
          Log In
        </NavLink>
        {id === 'register' ? <Register /> : <Login />}
      </div>
    </div>
  );
};
