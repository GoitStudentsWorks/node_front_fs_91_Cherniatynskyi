import css from './WarningList.module.css';


export const WarningList = ({confirm})=> {
  return (
    
        <ul className={css.WList}>
            <li className={css.WItem}><button className={css.WButton}type="button" onClick={confirm}>Yes</button></li>
            <li className={css.WItem}><button className={css.WButton}type="button">No</button></li>
        </ul>
   
  )
}
