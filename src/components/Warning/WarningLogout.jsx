import { useDispatch } from 'react-redux';
import css from './Warning.module.css';
import { WarningList } from './WarningList';
import { logoutThunk } from '../../redux/auth/authThunks';


export const WarningLogout = ()=> {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css.awrningWrapper}>
        <p className={css.warningText}>Are you sure you want to Log Out</p>
        <WarningList confirm={handleLogout} />
    </div>
  )
}