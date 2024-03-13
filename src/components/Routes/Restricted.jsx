import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectTokenExpiration } from '../../redux/auth/selector';
export const Restricted = ({ element: Element }) => {
  const tokenExpiration = useSelector(selectTokenExpiration);
  return Number(tokenExpiration) > new Date().getTime() ? (
    <Navigate to="/home" />
  ) : (
    <Element />
  );
};
