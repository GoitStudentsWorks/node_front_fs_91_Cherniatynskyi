import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Calendar } from 'components/Calendar';
import { useDispatch } from 'react-redux';
import { addCard } from '../../../redux/board/operations';
import { Icon } from 'components/Icon';

import styles from './AddCardModal.module.css';

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

export default function AddCardModal({ title, btnText, onClose, columnId }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(addCard({ values, columnId }));
    onClose();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titleModal}>{title}</h2>
      <div className={styles.closeModal}>
        <button type="button" onClick={onClose}>
          <Icon
            name="close"
            width="18"
            height="18"
            stroke="var(--textColorcalendar)"
          />
        </button>
      </div>
      <Formik
        initialValues={{
          title: '',
          text: '',
          priority: 'without',
          deadline: selectedDate,
        }}
        validationSchema={formCardSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, setFieldValue }) => (
          <form className={styles.styledForm} onSubmit={handleSubmit}>
            <input
              className={styles.titleCard}
              type="text"
              name="title"
              placeholder="Title"
            />
            <p className={styles.errMsg} name="title" />
            <label>
              <textarea
                className={styles.styledDescription}
                rows={4}
                name="text"
                placeholder="Description"
              />
              <p className={styles.errMsg} name="text" />
            </label>
            <label
              className={styles.labelColorStyle}
              htmlFor="colorCard-radio-group"
            >
              Label color
            </label>
            {/* <RadioInputs
              defaultChecked="without"
              onPriorityChange={priority => {
                setFieldValue('priority', priority);
              }}
            /> */}
            <p className={styles.deadlineStyle}>Deadline</p>
            <div>
              <span className={styles.span}> Today,</span>
              <Calendar
                selectedDate={selectedDate}
                onDateChange={date => {
                  setSelectedDate(date);
                  setFieldValue('deadline', date);
                }}
              />
            </div>
            <button className={styles.addButton} type="submit">
              <div className={styles.stylePlus}>
                <Icon name="plus" width="14" height="14" />
              </div>
              <p>{btnText}</p>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
