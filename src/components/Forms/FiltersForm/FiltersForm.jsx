import css from './FiltersForm.module.css';
import { Formik } from 'formik';
import { priorityEnum } from 'utils/priorityObject';
import { useDispatch } from 'react-redux';
import { setFilterValue, clearFilter } from '../../../redux/filterSlice';

export const FiltersForm = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilterValue(e.target.value));
  };

  const handleClearFilter = e => {
    e.preventDefault();
    dispatch(clearFilter());

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => (button.checked = false));
  };
  return (
    <div
      data-popup="menu"
      className={`${css.formWrap} ${!isOpen && css.menuListHidden}`}
    >
      <h2 className={css.formTitle}>Filters</h2>
      <div className={css.filterLine}></div>
      <Formik
        initialValues={{
          priority: 'without',
        }}
      >
        <form className={css.from}>
          <fieldset className={css.iconsForm}>
            <div className={css.labelTitle}>
              <legend className={css.iconsTitle}>Label color</legend>
              <button
                onClick={e => handleClearFilter(e)}
                className={css.iconsAll}
              >
                Show all
              </button>
            </div>
            <div className={css.iconsWrap}>
              {priorityEnum.map(pr => {
                return (
                  <label key={pr.title} className={css.container}>
                    <input
                      type="radio"
                      name="icon"
                      value={pr.title}
                      required
                      onChange={e => handleChangeFilter(e)}
                    />
                    <p className={css.iconName}>{pr.title}</p>
                    <span
                      style={{ backgroundColor: `${pr.color}` }}
                      className={`${css.checkmark}`}
                    ></span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </form>
      </Formik>
    </div>
  );
};
