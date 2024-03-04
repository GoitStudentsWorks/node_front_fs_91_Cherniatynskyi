import css from './Column.module.css';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';

export const Addcolumn = () => {
  const existingColumns = [];

  const [title, setTitle] = useState(existingColumns[0]);

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    console.log({ title });
  };

  return (
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Edit column</h2>
      <form className={css.form} onSubmit={e => onSubmitForm(e)}>
        <label htmlFor="name">
          <select
            value={title}
            onChange={e => handleChange(e)}
            className={css.formInput}
            name="title"
            required
          >
            {existingColumns.map((column, index) => (
              <option key={index} value={column}>
                {column}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className={css.formButton}>
          <div className={css.iconWrap}>
            <svg width="14" height="14" className={css.buttonIcon}>
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </div>
          Edit
        </button>
      </form>
    </div>
  );
};
