import { NavLink } from 'react-router-dom';
import css from './Auth.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={css.authLink} to="auth/register">
        Registration
      </NavLink>
      <NavLink className={css.authLink} to="auth/login">
        Log In
      </NavLink>
    </div>
  );
};
