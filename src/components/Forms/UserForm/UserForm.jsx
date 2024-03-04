// import { useState } from 'react';
import css from './UserForm.module.css'

export const UserForm = () =>{
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [comment, setPassword] = useState('');

//   const handleEmailChange = e => {
//     setEmail(e.target.value);
//   };

//   const handleCommentChange = e => {
//     setEmail(e.target.value);
//   };

//   const onSubmitForm = e => {
//     e.preventDefault();
//     console.log({ email, comment });
//   };

  return (<>
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Need help</h2>
      <form className={css.form} >
        

        <button type="submit" className={css.formButton}>
          Send
        </button>
      </form>
    </div>
  </>);
}