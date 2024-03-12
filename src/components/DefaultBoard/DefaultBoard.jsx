import css from './DefaultBoard.module.css';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modalSlice';
import { useTranslation } from 'react-i18next';

export const DefaultBoard = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch();

  const handleOpenAddBoardModal = () => {
    dispatch(openModal({ content: 'add-board' }));
  };

  return (
    <div className={css.boardDefault}>
      <p className={css.boardDefaultText}>
        {t("dflt.text-1st")}{' '}
        <span
          className={css.boardDefaultLink}
          onClick={handleOpenAddBoardModal}
        >
          {t("dflt.text-thumb")}
        </span>{' '}
        {t("dflt.text-2nd")}
      </p>
    </div>
  );
};
