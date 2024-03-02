import { AuthNav } from 'components/Auth/AuthNav';
import css from '../../components/Auth/Auth.module.css';

export const AuthPage = () => {
  return (
    <div className={css.authPageWrapper}>
      <AuthNav />
    </div>
  );
};
