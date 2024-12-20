import React from "react";
import IconButton from "../shared/iconButton/iconButton";
import { AppRoutes } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import style from "./authIcon.module.css";

const AuthIcon: React.FC = () => {
  const { user, logout } = useAuth();
  const [isUserMenuOpen, setUserMenuOpen] = React.useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
  };

  return (
    <div className={style["user-icon"]}>
    <IconButton
      icon="./src/assets/icons/user.svg"
      alt="Usuario"
      onClick={user ? toggleUserMenu : undefined}
      link={!user ? AppRoutes.Login : undefined}
      className={style["user-icon"]}
    />
    {user && isUserMenuOpen && (
      <div className={style["user-menu"]}>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    )}
  </div>
  );
};

export default AuthIcon;
