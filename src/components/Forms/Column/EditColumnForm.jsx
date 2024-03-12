import css from './ColumnForm.module.css';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateColumn } from '../../../redux/column/columnThunk';
import { closeModal } from '../../../redux/modalSlice';

export const EditColumnForm = () => {
  const { selectedElId } = useSelector(state => state.modal);
  const stateColumns = useSelector(state => state.columns.columns)
  const currentColumn = stateColumns.find(col=> col._id === selectedElId)
  
  const [title, setTitle] = useState(currentColumn.title);
  const dispatch = useDispatch()

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
    <h2 className={css.formTitle}>Edit column</h2>
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
          Edit
        </button>
      </form>
    </>
  );
};
