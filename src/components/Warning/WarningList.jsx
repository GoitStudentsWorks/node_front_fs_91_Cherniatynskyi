import css from './Warning.module.css';


export const WarningList = ({onDelete, onCancel, onLogout})=> {
  return (
    
        <ul className={css.WList}>
            <li className={css.WItem}><button className={css.WButton}type="submit" onClick={onDelete ?? onLogout}>Yes</button></li>
            <li className={css.WItem}><button className={css.WButton}type="button" onClick={onCancel}>No</button></li>
        </ul>
   
  )
}
