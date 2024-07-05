import { createBrowserRouter } from "react-router-dom";
import InvestorDashboardPage from "./pages/InvestorDashboardPage";
import ExploreProjectsPage from "./pages/ExploreProjectsPage";
import Signee from "./pages/InvestInProject/Signee";
import ProjectIntroduction from "./pages/Investor/AdminPanel/ProjectIntroduction";

export const routes = createBrowserRouter([
  { path: "/", element: <InvestorDashboardPage /> },
  { path: "/explore-projects", element: <ExploreProjectsPage /> },
  { path: "/invest-in-project", element: <Signee /> },
  { path: "/admin/project-introduction", element: <ProjectIntroduction /> },
]);
