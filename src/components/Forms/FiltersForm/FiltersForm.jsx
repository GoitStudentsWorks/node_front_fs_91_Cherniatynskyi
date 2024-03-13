import css from './FiltersForm.module.css';
import { Formik } from 'formik';
import { priorityEnum } from 'utils/priorityObject';
import { useDispatch } from 'react-redux';
import { setFilterValue, clearFilter } from '../../../redux/filterSlice';
import { useTranslation } from 'react-i18next';

export const FiltersForm = ({ isOpen }) => {
  const dispatch = useDispatch();
  const {t} = useTranslation()

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
      <h2 className={css.formTitle}>{t('filter')}</h2>
      <div className={css.filterLine}></div>
      <Formik
        initialValues={{
          priority: 'without',
        }}
      >
        <form className={css.from}>
          <fieldset className={css.iconsForm}>
            <div className={css.labelTitle}>
              <legend className={css.iconsTitle}>{t('form.lbl-color')}</legend>
              <button
                onClick={e => handleClearFilter(e)}
                className={css.iconsAll}
              >
                {t('form.all-btn')}
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
                    <p className={css.iconName}>{t(`main.priorities.${pr.title}`)}</p>
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
