
import { NavLink } from 'react-router-dom';
import css from './WelcomePage.module.css';
import iconImg from '../../images/welcome/boy@2x.png';
import sprite from '../../images/sprite.svg';



const WelcomePage = () => {
  return (
    <div className={css.welcomeWrapper}>
      <div className={css.welcomeContainer}>
        <img src={iconImg} alt="boy at laptop" className={css.welcomeIcon} />
        <div className={css.welcomeLogo}>
          <svg className={css.welcomeLogoIcon}>
            <use href={`${sprite}#icon-logo2`} />
          </svg>
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

export default WelcomePage;
