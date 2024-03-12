import css from '../HeaderDashboard/HeaderDashboard.module.css';
import Filters from '../Filters/Filters';


const HeaderDashboard = ({ board }) => {
  return (
    <div className={css.headDashWrap}>
      <h2 className={css.dashboardName}>{board?.name}</h2>
      <Filters />
    </div>
  );
};

export default HeaderDashboard;
