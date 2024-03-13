import css from './ColumnForm.module.css';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateColumn } from '../../../redux/column/columnThunk';
import { closeModal } from '../../../redux/modalSlice';
import { useTranslation } from 'react-i18next';

export const EditColumnForm = () => {
  const { selectedElId } = useSelector(state => state.modal);
  const stateColumns = useSelector(state => state.columns.columns)
  const currentColumn = stateColumns.find(col=> col._id === selectedElId)
  
  const [title, setTitle] = useState(currentColumn.title);
  const dispatch = useDispatch()
  const {t} = useTranslation()

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(updateColumn({id: selectedElId, newColumn: {title}}))
    dispatch(closeModal())
  };

  return (
    <>
    <h2 className={css.formTitle}>{t("form.clm-edt")}</h2>
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

        <button type="submit" className={css.formButton}>
          <div className={css.iconWrap}>
            <svg width="14" height="14" className={css.buttonIcon}>
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </div>
          {t("form.edt-crd-btn")}
        </button>
      </form>
    </>
  );
};
