import { createBrowserRouter } from "react-router-dom";
import InvestorDashboardPage from "./pages/InvestorDashboardPage";
import ExploreProjectsPage from "./pages/ExploreProjectsPage";
import Signee from "./pages/InvestInProject/Signee";

export const routes = createBrowserRouter([
    {path: "/", element: <InvestorDashboardPage />},
    {path: "/explore-projects", element: <ExploreProjectsPage />},
    {path: "/invest-in-project", element: <Signee />},
])