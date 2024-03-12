import css from './ColumnForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { postColumn } from '../../../redux/column/columnThunk';
import { closeModal } from '../../../redux/modalSlice';

export const AddColumnForm= () => {
  const [title, setTitle] = useState('');
  const currentBoardId = useSelector(state => state.boards.currentBoardId)
  const dispatch = useDispatch()

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
    </>
  );
};
