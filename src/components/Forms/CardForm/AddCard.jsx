import { useState } from 'react';
import { Calendar } from 'components/Calendar';
import sprite from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { postCard } from '../../../redux/card/cardThunk';
import { closeModal } from '../../../redux/modalSlice';
import css from './AddCard.module.css';
import { priorityEnum } from 'utils/priorityObject';
import { useTranslation } from 'react-i18next';

export const AddCardForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Without priority');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const currBoardId = useSelector(state => state.boards.currentBoardId);
  const currColumnId = useSelector(state => state.columns.currentColumnId);
  const allCards = useSelector(state => state.cards.cards);
  const currColumnCardsLgth = allCards.filter(
    card => card.columnId === currColumnId
  ).length;
  const dispatch = useDispatch();
  const {t} = useTranslation()

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleDescChange = e => {
    setDescription(e.target.value);
  };

  const handleDataChange = date => {
    setSelectedDate(date);
  };

  const handlePriorityChange = e => {
    setPriority(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const index = currColumnCardsLgth;
    const newCard = {
      title,
      description,
      priority,
      deadline: selectedDate.getTime(),
      boardId: currBoardId,
      columnId: currColumnId,
      index: index,
    };
    dispatch(postCard(newCard));
    dispatch(closeModal());
  };

  return (
    <>
      <h2 className={css.formTitle}>{t('form.card-add')}</h2>
      <form className={css.from} onSubmit={handleSubmitForm}>
        <input
          className={css.formInputTitle}
          type="text"
          name="title"
          placeholder={t('form.new-placeholder')}
          onChange={e => handleTitleChange(e)}
          required
        />
        <p className={css.errMsg} name="title" />
        <label>
          <textarea
            className={css.formInput}
            rows={4}
            name="text"
            placeholder={t('form.crd-descr')}
            onChange={e => handleDescChange(e)}
            required
          />
          <p className={css.errMsg} name="text" />
        </label>
        <fieldset className={css.iconsForm}>
          <legend className={css.iconsTitle}>{t('form.lbl-color')}</legend>
          <div className={css.iconsWrap}>
            {priorityEnum.map(pr => {
              return (
                <label key={pr.title} className={css.container}>
                  <input
                    type="radio"
                    name="icon"
                    value={pr.title}
                    onChange={e => handlePriorityChange(e)}
                    required
                    checked = {priority === pr.title}
                  />
                  <span
                    style={{ backgroundColor: `${pr.color}` }}
                    className={`${css.checkmark}`}
                  ></span>
                </label>
              );
            })}
          </div>
        </fieldset>
        <p className={css.deadlineStyle}>{t('main.card-deadline')}</p>
        <div className={css.deadlineContainer}>
          {/* {selectedDate.getDate() === new Date().getDate() &&
          selectedDate.getMonth() === new Date().getMonth() &&
          selectedDate.getFullYear() === new Date().getFullYear() ? (
            <span className={css.span}> Today,</span>
          ) : null} */}
          <Calendar
            selectedDate={selectedDate}
            onDateChange={handleDataChange}
          />
        </div>
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
