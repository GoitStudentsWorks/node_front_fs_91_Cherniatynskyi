import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const WelcomeContent = () => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <svg></svg>
        <h1>Task Pro</h1>
      </div>
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <NavLink to="/auth/register">Registration</NavLink>
      <NavLink to="/auth/login">Log In</NavLink>
    </div>
  );
};

export default WelcomeContent;
