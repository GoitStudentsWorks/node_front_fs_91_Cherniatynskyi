import React from 'react';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage } from 'formik';
import css from './Auth.module.css';
import sprite from '../../images/sprite.svg';

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}$/;

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, 'Enter a valid Email*')
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: Yup.string()
    .required('Password is required*')
    .matches(passwordRegExp, 'Password must meet the requirements*'),
});

export const Login = () => {
  // const dispatch = useDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     dispatch(
  //       logIn({
  //         email: form.elements.email.value,
  //         password: form.elements.password.value,
  //       })
  //     );
  //     form.reset();
  return (
    <div className={css.loginForm}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
      >
        {/* <Form onSubmit={handleSubmit} autoComplete="off">*/}
        <Form autoComplete="off">
          <div className={css.fieldWrapper}>
            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <ErrorMessage name="email">
            {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
          </ErrorMessage>
          <div className={css.fieldWrapper}>
            <Field
              className={css.field}
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Confirm a password"
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
          </div>
          <ErrorMessage name="password">
            {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
          </ErrorMessage>

          <button className={css.button} type="submit">
            Log In Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

// *Додати іконку і логіку на видимість пароля
