import { Login } from 'components/Auth/Login';
import { Register } from 'components/Auth/Register';
import css from './AuthPage.module.css';
import { useSelector } from 'react-redux';
import { isRegister } from '../../redux/auth/selector';

export const AuthPage = () => {
  const isRegisterForm = useSelector(isRegister);

  return (
    <div className={css.test}>{isRegisterForm ? <Register /> : <Login />}</div>
  );
};
