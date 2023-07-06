import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ auth, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth && !localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [auth]);

  return auth || localStorage.getItem("token") ? children : null;
}

export default PrivateRoute;
