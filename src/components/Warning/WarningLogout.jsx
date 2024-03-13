import { useDispatch } from 'react-redux';
import css from './Warning.module.css';
import { WarningList } from './WarningList';
import { logoutThunk } from '../../redux/auth/authThunks';
import { closeModal } from '../../redux/modalSlice';
import { useTranslation } from 'react-i18next';


export const WarningLogout = ()=> {
  const dispatch = useDispatch();
  const {t} = useTranslation()

  const handleLogout = () => {
    console.log("LOGOUT")
    dispatch(logoutThunk());
    dispatch(closeModal())
  };

  const handleCancel = ()=>{
    dispatch(closeModal())
  }

  return (
    <>
    <p className={css.WDText}>{t('form.logout')}</p>
    <WarningList onLogout={handleLogout} onCancel={handleCancel}/>
    </>
  )
}