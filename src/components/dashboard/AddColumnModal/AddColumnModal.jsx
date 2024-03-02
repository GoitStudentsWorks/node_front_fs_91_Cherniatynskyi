import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';

const AddColumnModal = ({ isOpen, onClose, onAddColumn }) => {
  const initialValues = {
    title: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddColumn(values.title);
    resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="title">Title:</label>
          <Field
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            autoComplete="off"
            autoFocus
          />
          <ErrorMessage name="title" component="div" className="error" />
        </div>
        <button type="submit">
          <div>
            <svg>
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
            <p>Add another column</p>
          </div>
        </button>
      </Form>
    </Formik>
  );
};

export default AddColumnModal;
