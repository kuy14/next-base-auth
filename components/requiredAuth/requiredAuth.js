import cookie from "js-cookie";
import LoginPage from "../../pages/login/index";
import { useSelector } from "react-redux";

const requiredAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const userState = useSelector((state) => state.user.user);

    if (userState.length !== 0) {
      return <Component />;
    }
    return <LoginPage />;
  };

  return AuthenticatedComponent;
};

export default requiredAuth;
