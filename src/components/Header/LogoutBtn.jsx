import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import logout from "../../features/authSlice/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logouthandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logouthandler}
      className="inline-block bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
