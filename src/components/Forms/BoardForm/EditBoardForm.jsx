import css from './BoardForm.module.css';

import { useState } from 'react';
import sprite from '../../../images/sprite.svg';

export const EditBoardForm = () => {
  const [title, setTitle] = useState('');
  const [iconValue, setIconValue] = useState('');
  const [bgValue, setBgValue] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleIconChange = e => {
    setIconValue(e.target.value);
  };

  const handleBgChange = e => {
    setBgValue(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    console.log({ title, iconValue, bgValue });
  };

  const icValues = [
    'four-circles',
    'eye',
    'star',
    'loading',
    'puzzle',
    'container',
    'logo',
    'hexagon',
  ];
  const bgValues = [];

  for (let i = 1; i <= 16; i++) {
    bgValues.push(i);
  }

  

  return (
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Edit Board</h2>
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
        <fieldset className={css.iconsForm}>
          <legend className={css.iconsTitle}>Icons</legend>
          <div className={css.iconsWrap}>
            {icValues.map(ic => {
              return (
                <label key={ic} className={css.container}>
                  <input
                    onChange={e => handleIconChange(e)}
                    type="radio"
                    id={ic}
                    name="icon"
                    value={ic}
                  />
                  <svg className={css.checkmark}>
                    <use href={`${sprite}#icon-${ic}`} />
                  </svg>
                </label>
              );
            })}
          </div>
        </fieldset>
        <fieldset className={css.iconsForm}>
          <legend className={css.iconsTitle}>Background</legend>
          <div className={css.bgIconsWrap}>
            {bgValues.map(bg => {
              return (
                <label key={bg} className={css.bgContainer}>
                  <input
                    onChange={e => handleBgChange(e)}
                    type="radio"
                    id={bg}
                    name="bg"
                    value={bg}
                  />
                  <img
                    className={css.bgCheckmark}
                    width="20"
                    height="20"
                    src={require(`../../../images/card/background-icons/${bg}.png`)}
                    alt=""
                  />
                </label>
              );
            })}
          </div>
        </fieldset>
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