import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "~/context/profileContext";

export function ProtectedRoutes () {

    const { profile } = useProfile();

    return profile ? <Outlet /> : <Navigate to="/welcome" replace />

}