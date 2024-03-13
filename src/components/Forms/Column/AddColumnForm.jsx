import css from './ColumnForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { postColumn } from '../../../redux/column/columnThunk';
import { closeModal } from '../../../redux/modalSlice';
import { useTranslation } from 'react-i18next';

export const AddColumnForm= () => {
  const [title, setTitle] = useState('');
  const currentBoardId = useSelector(state => state.boards.currentBoardId)
  const dispatch = useDispatch()
  const {t} = useTranslation()

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(postColumn({title: title, boardId: currentBoardId}))
    dispatch(closeModal());
  };

  return (
    <>
      <h2 className={css.formTitle}>{t('form.clm-add')}</h2>
      <form className={css.form} onSubmit={e => onSubmitForm(e)}>
        <label htmlFor="name">
          <input
            autoComplete="false"
            placeholder={t('form.new-placeholder')}
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
          {t('form.add-crd-btn')}
        </button>
      </form>
    </>
  );
};
