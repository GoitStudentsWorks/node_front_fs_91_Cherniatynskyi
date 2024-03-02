import DatePicker from 'react-datepicker';
import { enGB } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Calendar.module.css'

export function Calendar({ selectedDate, onDateChange }) {
  const handleDateChange = date => {
    onDateChange(date);
  };

  return (
    <div>
      <DatePicker
      calendarClassName={css.calendar}
      dayClassName={() =>css.day}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => 
      <div className={css.header}>
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
        </button>
      </div>}
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d"
      minDate={new Date()}
      locale={enGB}
      weekStartsOn={1}
    />
    </div>
  
  );
}
