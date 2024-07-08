import { createBrowserRouter } from "react-router-dom";
import InvestorDashboardPage from "./pages/Investor/InvestorDashboardPage";
import ExploreProjectsPage from "./pages/Investor/ExploreProjectsPage";
import Signee from "./pages/Investor/InvestInProject/Signee";
import ProjectIntroduction from "./pages/Investor/AdminPanel/ProjectIntroduction";
import MainInvesting from "./pages/Investor/AdminPanel/MainInvesting";
import AddingProjectFounder from "./pages/AddingProject/Founder";
import KeyFeaturesPage from "./pages/Investor/KeyFeaturesPage";
import FounderAdminPanel from "./pages/Founder/FounderAdminPanel";
import FounderInvestors from "./pages/Founder/FounderInvestors";
import StartPage from "./pages/StartPage";

export const routes = createBrowserRouter([
  { path: "/*", element: <StartPage /> },
  { path: "/investor", element: <InvestorDashboardPage /> },
  { path: "/investor/explore-projects", element: <ExploreProjectsPage /> },
  { path: "/investor/invest-in-project", element: <Signee /> },
  { path: "/investor/admin", element: <MainInvesting /> },
  {
    path: "/investor/admin/project-introduction",
    element: <ProjectIntroduction />,
  },
  {
    path: "/investor/admin/key-features-highlights",
    element: <KeyFeaturesPage />,
  },
  { path: "/founder", element: <AddingProjectFounder /> },
  { path: "/founder/admin", element: <FounderAdminPanel /> },
  { path: "/founder/investors", element: <FounderInvestors /> },
]);
