import css from './Warning.module.css';
import { useTranslation } from 'react-i18next';


export const WarningList = ({onDelete, onCancel, onLogout})=> {
  const {t} = useTranslation()
  return (
    
        <ul className={css.WList}>
            <li className={css.WItem}><button className={`${css.WButton} ${css.btnDel}`}type="submit" onClick={onDelete ?? onLogout}>{onLogout ? `${t('form.cnf-logout')}` : `${t('form.cnf-btn')}`}</button></li>
            <li className={css.WItem}><button className={`${css.WButton} ${css.btnCnl}`}type="button" onClick={onCancel}>{t('form.cnl-btn')}</button></li>
        </ul>
   
  )
}
