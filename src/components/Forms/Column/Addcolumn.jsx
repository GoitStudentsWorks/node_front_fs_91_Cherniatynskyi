import css from './Column.module.css';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';

export const Addcolumn = () => {
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    console.log({ title });
  };

  return (
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Add column</h2>
      <form className={css.form} onSubmit={e => onSubmitForm(e)}>
        <label htmlFor="name">
          <input
            autoComplete="false"
            placeholder="Title"
            onChange={e => handleChange(e)}
            value={title}
            className={css.formInput}
            type="text"
            name="title"
            required
          />
        </label>

        <button type="submit" className={css.formButton}>
          <div className={css.iconWrap}>
            <svg width="14" height="14" className={css.buttonIcon}>
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </div>
          Add
        </button>
      </form>
    </div>
  );
};
