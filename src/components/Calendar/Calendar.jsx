import React from 'react';
import DatePicker from 'react-datepicker';
import { enGB } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Calendar.module.css';
import { forwardRef } from 'react';
import sprite from '../../images/sprite.svg';
import { format } from 'date-fns';

const CustomInputWrapper = forwardRef(({ value, onClick }, ref) => (
  <button
    type="button"
    className={`${css.inputCalendar} ${css.buttonWithIcon}`}
    onClick={onClick}
    ref={ref}
  >
    <span>{value}</span>
    <svg
      data-popup="popupBtn"
      className={css.iconChevronDown}
      width="18"
      height="18"
    >
      <use data-popup="popupBtn" href={`${sprite}#icon-chevron-down`} />
    </svg>
  </button>
));

export function Calendar({ selectedDate, onDateChange }) {
  const handleDateChange = (date) => {
    onDateChange(date);
  };

  const getDateFormat = (date) => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return "'Today', MMMM dd";
  } else if (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  ) {
    return "'Tomorrow', MMMM dd";
  } else {
    return "EEEE, MMMM dd";
  }
};

  const isDateDisabled = (date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return date <= yesterday;
  };

  return (
    <div>
      <DatePicker
        calendarClassName={css.calendar}
        dayClassName={(date) =>
          `${css.day} ${isDateDisabled(date) ? css.disabled : ''}`
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={css.header}>
            <button
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {"<"}
            </button>
            <span>
              {format(date, 'MMMM yyyy', { locale: enGB })}
            </span>
            <button
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {">"}
            </button>
          </div>
        )}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat={getDateFormat(selectedDate)}
        minDate={new Date()}
        locale={enGB}
        weekStartsOn={0}
        popoverPlacement="bottom"
        customInput={<CustomInputWrapper />}
        className={css.inputCalendar}
        weekDayClassName={() => css.weekDay}
      />
    </div>
  );
}