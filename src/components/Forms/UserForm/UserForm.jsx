import React from 'react';
import { useState } from 'react';
import { Formik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageInput from './ImgInput.jsx';
import sprite from '../../../images/sprite.svg';
import css from './UserForm.module.css';

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
export const UserForm = () => {
  //     const [name, setName] = useState('');
  //     const [email, setEmail] = useState('');
  //     const [comment, setPassword] = useState('');


  //   const handleCommentChange = e => {
  //     setCEmail(e.target.value);
  //   };

  //   const onSubmitForm = e => {
  //     e.preventDefault();
  //     console.log({ email, comment });
  //   };
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={css.formWrap}>
        <h2 className={css.formTitle}>Edit profil</h2>
        <Formik
          initialValues={{
            avatar: '',
            avatarURL: '',
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={schema}
          // onSubmit={handleSubmit}
        >
          <Form>
            <label htmlFor="avatar">
              <ImageInput />
              <div className={css.userAvaWrapper}>
                <div className={css.imgWrapper}>
                  <img
                    // src={`${pot} 1x`}
                    alt=""
                    className={css.userImg}
                    width={68}
                  />
                </div>
                <button
                  className={css.iconBtnPlus}
                  // pushButton={() => {
                  //   const fileInput = document.getElementById('avatar');
                  //   fileInput.click();
                  // }}
                >
                  <svg className={css.iconPlus} width="10" height="10">
                    <use xlinkHref={`${sprite}#icon-plus`} />
                  </svg>
                </button>
              </div>
            </label>
            <div className={css.fieldWrapper}>
              <Field
                className={css.field}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <ErrorMessage name="name">
              {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
            </ErrorMessage>
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
                placeholder="Create a password"
              />
              {passwordVisible ? (
                <button
                  className={css.iconBtn}
                  type="button"
                  onClick={handleClickPasswordVisibility}
                >
                  <svg className={css.iconEye} width="18" height="18">
                    <use href={`${sprite}#icon-eye`} />
                  </svg>
                </button>
              ) : (
                <button
                  className={css.iconBtn}
                  type="button"
                  onClick={handleClickPasswordVisibility}
                >
                  <svg className={css.iconEye} width="18" height="18">
                    <use href={`${sprite}#icon-eye`} />
                  </svg>
                </button>
              )}
            </div>
            <ErrorMessage name="password">
              {errorMsg => <div className={css.errorMessage}>{errorMsg}</div>}
            </ErrorMessage>
            <button className={css.btnSend} type="submit">
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
