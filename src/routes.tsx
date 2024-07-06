import { createBrowserRouter } from "react-router-dom";
import InvestorDashboardPage from "./pages/InvestorDashboardPage";
import ExploreProjectsPage from "./pages/ExploreProjectsPage";
import Signee from "./pages/InvestInProject/Signee";
import ProjectIntroduction from "./pages/Investor/AdminPanel/ProjectIntroduction";
import MainInvesting from "./pages/Investor/AdminPanel/MainInvesting";

export const routes = createBrowserRouter([
  { path: "/", element: <InvestorDashboardPage /> },
  { path: "/investor/explore-projects", element: <ExploreProjectsPage /> },
  { path: "/investor/invest-in-project", element: <Signee /> },
  { path: "/investor/admin", element: <MainInvesting /> },
  { path: "/investor/admin/project-introduction", element: <ProjectIntroduction /> },
]);
