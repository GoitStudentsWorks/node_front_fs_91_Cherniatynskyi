import React from 'react';
import DatePicker from 'react-datepicker';
import { enGB } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Calendar.module.css';

export function Calendar({ selectedDate, onDateChange }) {
  const handleDateChange = (date) => {
    onDateChange(date);
  };

  const today = new Date();
  const isToday =
    selectedDate.getDate() === today.getDate() &&
    selectedDate.getMonth() === today.getMonth() &&
    selectedDate.getFullYear() === today.getFullYear();

  return (
    <div >
      <DatePicker
        calendarClassName={css.calendar}
        dayClassName={() => css.day}
        
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={css.header}>
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>
            <span>
              {date.toLocaleDateString(enGB, {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d"
        minDate={new Date()}
        locale={enGB}
        weekStartsOn={0}
        renderCustomInput={({ value, onClick }) => (
          <input
            className={css.customInput}
            value={isToday ? '' : value}
            onClick={onClick}
          />
        )}
        className={css.inputCalendar}
        weekDayClassName={() => css.weekDay}
      />
    </div>
  );
}