import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

const PublicRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <>{!isLoggedIn ? children : <Navigate to={redirectTo} />}</>;
};

export default PublicRoute;
