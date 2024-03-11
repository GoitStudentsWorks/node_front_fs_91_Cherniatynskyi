import { useDispatch } from 'react-redux';
import css from './Warning.module.css';
import { WarningList } from './WarningList';
import { logoutThunk } from '../../redux/auth/authThunks';
import { closeModal } from '../../redux/modalSlice';


export const WarningLogout = ()=> {
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("LOGOUT")
    dispatch(logoutThunk());
    dispatch(closeModal())
  };

  const handleCancel = ()=>{
    dispatch(closeModal())
  }

  return (
    <div className={css.awrningWrapper}>
        <p className={css.warningText}>Are you sure you want to Log Out</p>
        <WarningList onLogout={handleLogout} onCancel={handleCancel}/>
    </div>
  )
}