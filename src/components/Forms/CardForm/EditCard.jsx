import { useState, useEffect } from 'react';
import { Calendar } from 'components/Calendar';
import sprite from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { postCard, updateCard } from '../../../redux/card/cardThunk';
import { closeModal } from '../../../redux/modalSlice';
import css from './AddCard.module.css';
import { priorityEnum } from 'utils/priorityObject';

export const EditCardForm = ({ editedCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const currBoardId = useSelector(state => state.boards.currentBoardId);
  const currColumnId = useSelector(state => state.columns.currentColumnId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editedCard) {
      setTitle(editedCard.title);
      setDescription(editedCard.description);
      setPriority(editedCard.priority);
      setSelectedDate(new Date(editedCard.deadline));
    }
  }, [editedCard]);

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleDescChange = e => {
    setDescription(e.target.value);
  };

  const handlePriorityChange = e => {
    setPriority(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const cardData = {
      title,
      description,
      priority,
      deadline: selectedDate.getTime(),
      boardId: currBoardId,
      columnId: currColumnId,
    };

    if (editedCard) {
      dispatch(updateCard({ ...editedCard, ...cardData }));
    } else {
      dispatch(postCard(cardData));
    }

    dispatch(closeModal());
  };

  return (
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Edit Card</h2>
      <form className={css.from} onSubmit={handleSubmitForm}>
        <input
          className={css.formInputTitle}
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <p className={css.errMsg} name="title" />
        <label>
          <textarea
            className={css.formInput}
            rows={4}
            name="text"
            placeholder="Description"
            value={description}
            onChange={handleDescChange}
            required
          />
          <p className={css.errMsg} name="text" />
        </label>
        <fieldset className={css.iconsForm}>
          <legend className={css.iconsTitle}>Label color</legend>
          <div className={css.iconsWrap}>
            {priorityEnum.map(pr => (
              <label key={pr.title} className={css.container}>
                <input
                  type="radio"
                  id={pr.title}
                  name="icon"
                  value={pr.title}
                  checked={priority === pr.title}
                  onChange={handlePriorityChange}
                  required
                />
                <span
                  style={{ backgroundColor: `${pr.color}` }}
                  className={`${css.checkmark}`}
                ></span>
              </label>
            ))}
          </div>
        </fieldset>
        <p className={css.deadlineStyle}>Deadline</p>
        <div className={css.deadlineContainer}>
          {selectedDate.getDate() === new Date().getDate() &&
          selectedDate.getMonth() === new Date().getMonth() &&
          selectedDate.getFullYear() === new Date().getFullYear() ? (
            <span className={css.span}> Today,</span>
          ) : null}
          <Calendar
            selectedDate={selectedDate}
            onDateChange={date => {
              setSelectedDate(date);
            }}
          />
        </div>
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