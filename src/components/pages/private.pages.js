import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ auth, children }) {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth || localStorage.getItem('token')) {
      setIsAuth(!isAuth);
    } else {
      navigate("/login");
    }
  }, [auth]);

  return <>{isAuth ? <>{ children }</> : null}</>;
}

export default PrivateRoute;
