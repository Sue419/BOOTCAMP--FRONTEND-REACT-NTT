import React from "react";
import IconButton from "../shared/iconButton/iconButton";
import { AppRoutes } from "@/constants/routes";
import style from "./authIcon.module.css";

const AuthIcon: React.FC = () => {
  return (
    <IconButton
      link={AppRoutes.Login}
      icon="./src/assets/icons/user.svg"
      alt="Login"
      className={style["auth-icon"]}
    />
  );
};

export default AuthIcon;
