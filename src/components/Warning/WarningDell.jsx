
import css from './Warning.module.css';
import { WarningList } from './WarningList';
// import { useDispatch} from 'react-redux';


export const WarningDell = ({title, del})=> {
 


  return (
    <div className={css.WDWrapper}>
        <p className={css.WDText}>Are you sure you want to delete <span className={css.WDTitle}>${title}</span></p>
        <WarningList confirm={del} />
    </div>
  )
}
