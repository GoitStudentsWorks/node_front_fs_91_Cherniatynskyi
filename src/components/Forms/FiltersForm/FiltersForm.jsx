import css from './FiltersForm.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

const priority = ['without', 'low', 'medium', 'high'];
const formFiltersSchema = Yup.object().shape({
  priority: Yup.string().oneOf(priority),
});

export const FiltersForm = ({ onSelectClose, isOpen }) => {
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
        validationSchema={formFiltersSchema}
      >
        {({ handleSubmit, setFieldValue }) => (
          <form className={css.from} onSubmit={handleSubmit}>
            <fieldset className={css.iconsForm}>
              <div className={css.labelTitle}>
                <legend className={css.iconsTitle}>Label color</legend>
                <button className={css.iconsAll}>Show all</button>
              </div>

              <div className={css.iconsWrap}>
                <label className={css.container}>
                  <input type="radio" id="1" name="icon" value="no-priority" />
                  <span className={`${css.checkmark} ${css.noPriority}`}></span>
                  <p className={css.iconName}>Without priority</p>
                </label>
                <label className={css.container}>
                  <input type="radio" id="2" name="icon" value="low-priority" />
                  <span
                    className={`${css.checkmark} ${css.lowPriority}`}
                  ></span>
                  <p className={css.iconName}>Low</p>
                </label>
                <label className={css.container}>
                  <input type="radio" id="3" name="icon" value="med-priority" />
                  <span
                    className={`${css.checkmark} ${css.medPriority}`}
                  ></span>
                  <p className={css.iconName}>Medium</p>
                </label>
                <label className={css.container}>
                  <input
                    type="radio"
                    id="4"
                    name="icon"
                    value="high-priority"
                  />
                  <span
                    className={`${css.checkmark} ${css.highPriority}`}
                  ></span>
                  <p className={css.iconName}>High</p>
                </label>
              </div>
            </fieldset>
          </form>
        )}
      </Formik>
    </div>
  );
};
