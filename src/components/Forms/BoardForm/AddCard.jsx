import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Calendar } from 'components/Calendar';
// import { useDispatch } from 'react-redux';
// import { addCard } from '../../../redux/board/operations';
import { Icon } from 'components/Icon';

import css from './AddCard.module.css';

const priority = ['without', 'low', 'medium', 'high'];

const formCardSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, `It's can be up to 3 characters long`)
    .max(100, 'Too Long!')
    .required(`This field is required.`),
  text: Yup.string()
    .min(10, `It's can be up to 10 characters long`)
    .max(500, 'Too Long!')
    .required(`This field is required.`),
  priority: Yup.string().oneOf(priority),
  deadline: Yup.date(),
});

export const AddCardForm = () =>{
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const dispatch = useDispatch();

  // const onSubmit = values => {
  //   dispatch(addCard({ values, columnId }));
  //   onClose();
  // };

  return (
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Add Card</h2>
      <Formik
        initialValues={{
          title: '',
          text: '',
          priority: 'without',
          deadline: selectedDate,
        }}
        validationSchema={formCardSchema}
        
      >
        {({ handleSubmit, setFieldValue }) => (
          <form className={css.from} onSubmit={handleSubmit}>
            <input
              className={css.formInput}
              type="text"
              name="title"
              placeholder="Title"
            />
            <p className={css.errMsg} name="title" />
            <label>
              <textarea
                className={css.formInput}
                rows={4}
                name="text"
                placeholder="Description"
              />
              <p className={css.errMsg} name="text" />
            </label>
            <fieldset className={css.iconsForm}>
            <legend className={css.iconsTitle}>Label color</legend>
            <div className={css.iconsWrap}>
                  <label className={css.container}>
                    <input 
                      type="radio"
                      id="1"
                      name="icon"
                      value="no-priority"
                    />
                    <span className={`${css.checkmark} ${css.noPriority}`}></span>
                  </label>
                  <label className={css.container}>
                    <input 
                      type="radio"
                      id="2"
                      name="icon"
                      value="low-priority"
                    />
                    <span className={`${css.checkmark} ${css.lowPriority}`}></span>
                  </label>
                  <label className={css.container}>
                    <input 
                      type="radio"
                      id="3"
                      name="icon"
                      value="med-priority"
                    />
                    <span className={`${css.checkmark} ${css.medPriority}`}></span>
                  </label>
                  <label className={css.container}>
                    <input 
                      type="radio"
                      id="4"
                      name="icon"
                      value="high-priority"
                    />
                    <span className={`${css.checkmark} ${css.highPriority}`}></span>
                  </label>
            </div>
          </fieldset>
            <p className={css.deadlineStyle}>Deadline</p>
            <div>
              <span className={css.span}> Today,</span>
              <Calendar
                selectedDate={selectedDate}
                onDateChange={date => {
                  setSelectedDate(date);
                  setFieldValue('deadline', date);
                }}
              />
            </div>
            <button className={css.addButton} type="submit">
              <div className={css.stylePlus}>
                <Icon name="plus" width="14" height="14" />
              </div>
              <p>Add card</p>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
