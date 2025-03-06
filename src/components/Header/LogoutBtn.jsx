import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import logout from "../../features/authSlice/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logouthandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <button
      onClick={logouthandler}
      className="inline-block bg-[#986c43] ml-2 mr-2 hover:bg-white/10 hover:no-underline rounded text-xl font-normal text-white px-4 py-2 duration-200 hover:text-white/90 transition-all font-fredoka"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
