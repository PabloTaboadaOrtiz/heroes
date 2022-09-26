import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PublicRoutes } from "./PublicRoutes";



export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                        <PublicRoutes>
                            <LoginScreen />
                        </PublicRoutes>
                    } 
                />

                {/* <Route path="/login" element={<LoginScreen />} /> */}
                
                <Route path="/*" element={
                        <PrivateRoutes>
                            <DashboardRoutes />
                        </PrivateRoutes>
                    } 
                />

                {/* <Route path="/*" element={<DashboardRoutes />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
