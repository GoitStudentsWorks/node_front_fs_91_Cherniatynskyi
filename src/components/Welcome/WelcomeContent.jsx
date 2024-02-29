import { NavLink } from 'react-router-dom';
import css from '../Welcome/WelcomeContent.module.css';

export const WelcomeContent = () => {
  return (
    <div className={css.welcomeWrapper}>
      <div className={css.welcomeContainer}>
        <img src="" alt="" className={css.welcomeIcon} />
        <div className={css.welcomeLogo}>
          <svg className={css.welcomeLogoIcon}></svg>
          <h1 className={css.welcomeLogoTitle}>Task Pro</h1>
        </div>
        <p className={css.welcomeText}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <NavLink to="/auth/register" className={css.welcomeRegisterBtn}>
          Registration
        </NavLink>
        <NavLink to="/auth/login" className={css.welcomeLoginBtn}>
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomeContent;
