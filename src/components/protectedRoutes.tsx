import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "~/context/profileContext";
import useProfileLocation from "~/hooks/useProfileLocation";

export function ProtectedRoutes () {

    useProfileLocation()    

    const { profile } = useProfile();

    return profile ? <Outlet /> : <Navigate to="/welcome" replace />

}