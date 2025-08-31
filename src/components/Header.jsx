import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute w-full p-4 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
      {user && (
        <>
          {" "}
          <div className="flex">
            <button
              className="fontext-2xl cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
