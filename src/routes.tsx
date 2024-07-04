import { createBrowserRouter } from "react-router-dom";
import InvestorDashboardPage from "./pages/InvestorDashboardPage";

export const routes = createBrowserRouter([
    {path: "/", element: <InvestorDashboardPage />},
])