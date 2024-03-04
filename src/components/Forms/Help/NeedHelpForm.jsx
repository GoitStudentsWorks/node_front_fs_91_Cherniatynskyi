import css from './NeedHelpForm.module.css';
import { useState } from 'react';

export const NeedHelpForm = () => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    console.log({ email, comment });
  };

  return (
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Need help</h2>
      <form className={css.form} onSubmit={e => onSubmitForm(e)}>
        <label htmlFor="email">
          <input
            autoComplete="false"
            placeholder="Email"
            onChange={e => handleEmailChange(e)}
            value={email}
            className={css.formInput}
            type="email"
            name="email"
            required
          />
        </label>
        <label htmlFor="comment">
          <textarea
            placeholder="Comment"
            onChange={e => handleCommentChange(e)}
            value={comment}
            className={css.commentInput}
            name="comment"
          />
        </label>
        <button type="submit" className={css.formButton}>
          Send
        </button>
      </form>
    </div>
  );
};
