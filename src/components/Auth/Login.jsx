import React from 'react';
import { Formik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';
import css from './Auth.module.css';

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';

export const Login = () => {
  // const dispatch = useDispatch();

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
      <Formik>
        {/* <Form onSubmit={handleSubmit} autoComplete="off">*/}
        <Form autoComplete="off">
          <ErrorMessage name="email" component="div" />
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="password" component="div" />
          <Field
            className={css.field}
            type="password"
            name="password"
            placeholder="Confirm a password"
          />

          <button className={css.button} type="submit">
            Log In Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

// *Додати іконку і логіку на видимість пароля
