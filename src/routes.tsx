import { createBrowserRouter } from "react-router-dom";
import InvestorDashboardPage from "./pages/InvestorDashboardPage";
import ExploreProjectsPage from "./pages/ExploreProjectsPage";

export const routes = createBrowserRouter([
    {path: "/", element: <InvestorDashboardPage />},
    {path: "/explore-projects", element: <ExploreProjectsPage />},
])