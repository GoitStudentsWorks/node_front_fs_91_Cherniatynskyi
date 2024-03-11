import css from './Warning.module.css';


export const WarningList = ({onDelete, onCancel, onLogout})=> {
  return (
    
        <ul className={css.WList}>
            <li className={css.WItem}><button className={`${css.WButton} ${css.btnDel}`}type="submit" onClick={onDelete ?? onLogout}>{onLogout ? 'Logout' : "Delete"}</button></li>
            <li className={css.WItem}><button className={`${css.WButton} ${css.btnCnl}`}type="button" onClick={onCancel}>Cancel</button></li>
        </ul>
   
  )
}
