import css from './BoardForm.module.css';
import { useState } from 'react';
import { closeModal } from '../../../redux/modalSlice';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../../redux/board/boardThunks';
import { useTranslation } from 'react-i18next';

export const NewBoardForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [iconValue, setIconValue] = useState('four-circles');
  const [bgValue, setBgValue] = useState('1');
  const {t} = useTranslation()

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

    const newBoard = {
      name: title,
      icon: iconValue,
      background: bgValue,
    };

    dispatch(addBoard(newBoard));
    e.target.reset();
    dispatch(closeModal());
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
    bgValues.push(`${i}`);
  }

  return (
    <>
      <h2 className={css.formTitle}>{t("form.new-title")}</h2>
      <form className={css.form} onSubmit={e => onSubmitForm(e)}>
        <label htmlFor="name">
          <input
            autoComplete="false"
            placeholder={t("form.new-placeholder")}
            onChange={e => handleChange(e)}
            value={title}
            className={css.formInput}
            type="text"
            name="title"
            required
          />
        </label>
        <fieldset className={css.iconsForm}>
          <legend className={css.iconsTitle}>{t("form.new-icon")}</legend>
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
                    required
                    checked={iconValue === ic}
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
          <legend className={css.iconsTitle}>{t("form.new-bg")}</legend>
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
                    required
                    checked={bgValue === bg}
                  />
                  <img
                    className={css.bgCheckmark}
                    width="28"
                    height="28"
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
          Create
        </button>
      </form>
    </>
  );
};
