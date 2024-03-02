import css from '../HeaderDashboard/HeaderDashboard.module.css';
import Filters from '../Filters/Filters';

const HeaderDashboard = ({ boardName }) => {
  return (
    <div className={css.headDashWrap}>
      {/* <h2 className={css.dashboardName}>{boardName}</h2> */}
      <h2 className={css.dashboardName}>Project office</h2>
      <Filters />
    </div>
  );
};

export default HeaderDashboard;
