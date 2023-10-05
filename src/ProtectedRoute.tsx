import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Role, User } from "./App";

interface Props {
    acceptedRoles: Role[]
    isAllowed?: boolean;
    children?: ReactNode;
    redirectPath?: string;
    user: User;
}

export const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/login',
    children,
    acceptedRoles,
    user
}: Props) => {
    if (!acceptedRoles.includes(user?.role || Role.USER) || !isAllowed ) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};