import css from './Warning.module.css';
import { WarningList } from './WarningList';


export const WarningLogout = ({logout})=> {
  return (
    <div className={css.awrningWrapper}>
        <p className={css.warningText}>Are you sure you want to Log Out</p>
        <WarningList confirm={logout} />
    </div>
  )
}