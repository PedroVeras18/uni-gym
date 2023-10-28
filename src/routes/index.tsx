import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuthService } from "@store/useAuth";

export function Routes() {
    const { userAuth } = useAuthService();

    return userAuth ? <AppRoutes /> : <AuthRoutes />
}