import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AppRoutes } from "@/constants/routes";

export const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    const { state } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!state.token) {
        navigate(AppRoutes.Home);
      }
    }, [state.token, navigate]);

    return state.token ? <Component {...props} /> : null;
  };
};
