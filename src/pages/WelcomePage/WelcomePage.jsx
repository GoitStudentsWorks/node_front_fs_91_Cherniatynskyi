import css from './WelcomePage.module.css';
import WelcomeContent from '../../components/Welcome/WelcomeContent';

export const WelcomePage = () => {
  return (
    <div className={css.test}>
      <WelcomeContent />
    </div>
  );
};

export default WelcomePage;
