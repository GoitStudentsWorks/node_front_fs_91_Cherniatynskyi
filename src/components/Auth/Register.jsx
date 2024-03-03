import React from 'react';
import { useState } from 'react';
import { Formik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Auth.module.css';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
import sprite from '../../images/sprite.svg';

const nameRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{2,32}$/;

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegExp, 'Enter a valid name*')
    .required('Name is required*'),
  email: Yup.string()
    .matches(emailRegExp, 'Enter a valid Email*')
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: Yup.string()
    .required('Password is required*')
    .matches(passwordRegExp, 'Password must meet the requirements*'),
});

export const Register = () => {
  // const dispatch = useDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (
    <div className={css.registerForm}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={schema}
        // onSubmit={handleSubmit}
      >
        <Form>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name">
            {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
          </ErrorMessage>
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email">
            {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
          </ErrorMessage>

          <Field
            className={css.field}
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            placeholder="Create a password"
          />
          {passwordVisible ? (
            <button
              className={css.iconBtn}
              type="button"
              onClick={handleClickPasswordVisibility}
            >
              <svg>
                <use href={`${sprite}#icon-eye`} />
              </svg>
            </button>
          ) : (
            <button
              className={css.iconBtn}
              type="button"
              onClick={handleClickPasswordVisibility}
            >
              <svg>
                <use href={`${sprite}#icon-eye`} />
              </svg>
            </button>
          )}
          <ErrorMessage name="password">
            {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
          </ErrorMessage>

          <button className={css.button} type="submit">
            Register Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

// * Підправити стилі на виведення помилки
// * звірити валідації
// * підключити зміну теми
