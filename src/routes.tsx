import { Navigate, createBrowserRouter } from "react-router-dom";
import InvestorDashboardPage from "./pages/Investor/InvestorDashboardPage";
import ExploreProjectsPage from "./pages/Investor/ExploreProjectsPage";
import Signee from "./pages/Investor/InvestInProject/Signee";
import ProjectIntroduction from "./pages/Investor/AdminPanel/ProjectIntroduction";
import MainInvesting from "./pages/Investor/AdminPanel/MainInvesting";
import KeyFeaturesPage from "./pages/Investor/KeyFeaturesPage";
import FounderAdminPanel from "./pages/Founder/FounderAdminPanel";
import FounderInvestors from "./pages/Founder/FounderInvestors";

export const routes = createBrowserRouter([
    { path: "/*", element: <Navigate to="/investor" /> },
    { path: "/investor", element: <InvestorDashboardPage /> },
    { path: "/investor/explore-projects", element: <ExploreProjectsPage /> },
    { path: "/investor/invest-in-project", element: <Signee /> },
    { path: "/investor/admin", element: <MainInvesting /> },
    { path: "/investor/admin/project-introduction", element: <ProjectIntroduction /> },
    { path: "/investor/admin/key-features-highlights", element: <KeyFeaturesPage /> },
    { path: "/founder", element: <></> },
    { path: "/founder/admin", element: <FounderAdminPanel /> },
    { path: "/founder/investors", element: <FounderInvestors /> },
]);
