import { NavLink, useParams } from 'react-router-dom';
import css from './Auth.module.css';
import { Register } from './Register';
import { Login } from './Login';

export const AuthNav = () => {
  const { id } = useParams();

  return (
    <div className={css.authForm}>
      <div className={css.authNav}>
        <NavLink className={css.authLink1} to="/auth/register">
          Registration
        </NavLink>
        <NavLink className={css.authLink2} to="/auth/login">
          Log In
        </NavLink>
        {id === 'register' ? <Register /> : <Login />}
      </div>
    </div>
  );
};
