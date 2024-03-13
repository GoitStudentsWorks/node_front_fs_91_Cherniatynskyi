import { useState } from 'react';
import { Calendar } from 'components/Calendar';
import sprite from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard } from '../../../redux/card/cardThunk';
import { closeModal } from '../../../redux/modalSlice';
import css from './AddCard.module.css';
import { priorityEnum } from 'utils/priorityObject';
import { useTranslation } from 'react-i18next';

export const EditCardForm = () => {
  const { selectedElId } = useSelector(state => state.modal);
  console.log(selectedElId);
  const stateCards = useSelector(state => state.cards.cards)
  const currentCard = stateCards.find(card=> card._id === selectedElId)
  const dispatch = useDispatch();
  const {t} = useTranslation()

  const [title, setTitle] = useState(currentCard.title);
  const [description, setDescription] = useState(currentCard.description);
  const [priority, setPriority] = useState(currentCard.priority);
  const [selectedDate, setSelectedDate] = useState(new Date());


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
    };
    console.log(cardData)
    dispatch(updateCard({id: currentCard._id, newCard: cardData}))
    dispatch(closeModal());
  };

  return (
    <>
    <h2 className={css.formTitle}>{t('form.edt-card')}</h2>
      <form className={css.from} onSubmit={handleSubmitForm}>
        <input
          className={css.formInputTitle}
          type="text"
          name="title"
          placeholder={t('form.new-placeholder')}
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
            placeholder={t('form.crd-descr')}
            value={description}
            onChange={handleDescChange}
            required
          />
          <p className={css.errMsg} name="text" />
        </label>
        <fieldset className={css.iconsForm}>
          <legend className={css.iconsTitle}>{t('form.lbl-color')}</legend>
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
        <p className={css.deadlineStyle}>{t('main.card-deadline')}</p>
        <div className={css.deadlineContainer}>
          {/* {selectedDate.getDate() === new Date().getDate() &&
          selectedDate.getMonth() === new Date().getMonth() &&
          selectedDate.getFullYear() === new Date().getFullYear() ? (
            <span className={css.span}> Today,</span>
          ) : null} */}
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
          {t('form.edt-crd-btn')}
        </button>
      </form>
    </>
  );
};