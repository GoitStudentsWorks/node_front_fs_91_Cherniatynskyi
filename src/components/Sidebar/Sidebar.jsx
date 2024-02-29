import css from './Sidebar.module.css';
import { Board } from '../Board/Board';

export const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      {/* logo, title */}
      <div className={css.titleBox}>
        <div className={css.iconBox}>
          <svg width="0" height="0">
            <use />
          </svg>
          <h2 className={css.title}>Task Pro</h2>
        </div>
        <div className={css.bordBox}>
          <h3 className={css.bordTitle}>My Boards</h3>
          {/* button create */}
          <div className={css.buttonBox}>
            <span className={css.buttonText}>Create a new board</span>
            <button className={css.buttonCreate}>
              <svg width="0" height="0">
                <use />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* boards  */}
      <ul className={css.bordList}>
        <Board></Board>
      </ul>
      {/* need help */}
      <div className={css.helpBox}>
        <div className={css.helpTextBox}>
          <img src="" alt="" />
          <p>
            If you need help with
            <span>TaskPro</span>, check out our support resources or reach out
            to our customer support team.
          </p>
          <button className={css.buttonHelp}>
            <svg width="0" height="0">
              <use />
            </svg>
            <p>Need help?</p>
          </button>
        </div>
        {/* logout */}
        <button className={css.buttonLogOut}>
          <svg width="0" height="0">
            <use />
          </svg>
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
};
