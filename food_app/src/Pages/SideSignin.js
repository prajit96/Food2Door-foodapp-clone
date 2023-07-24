import React, { useEffect, useState } from "react";
import "../Styles/SideSignin.css";
import { RegisterButton } from "./RegisterButton";
import { LoginButton } from "./LoginButton";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const SideSignin = ({ isOpen, onOpen, onClose }) => {
  const user = useSelector((store) => {
    return store.loginReducer.user;
  });
  const [random, setrandom] = useState(0);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setrandom(random + 1);
    window.location.href = "/";
  };
  useEffect(() => {}, [random]);
  return (
    <div className="signin-card">
      <ul>
        <li>
          <i className="fa-solid fa-user"></i>
          <p>Your Account</p>
        </li>
        <li>
          <i className="fa-solid fa-box"></i>

          <p>
            <Link to="/cart"> Your Orders</Link>
          </p>
        </li>
        <li>
          <i className="fa-regular fa-heart"></i>

          <p>Shortlist</p>
        </li>
      </ul>
      {user ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <>
          <p>If you are a new user</p>
          <RegisterButton />
          <Link to="/login"><LoginButton setrandom={setrandom} isOpen={isOpen} onOpen={onOpen} onClose={onClose}  /> </Link>
          
        </>
      )}
    </div>
  );
};