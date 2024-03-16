import { Outlet } from "react-router-dom";
import HomePage from "./pages/Home";
import TestsPage from "./pages/Tests";
import NotFound from "./pages/NotFound";
import Header from "./common/Header";
import Footer from "./common/Footer";
import TestDetail from "./pages/Test";
import { APP_ROUTES } from "./utils/constant";
import NewsArticle from "./pages/NewsArticle";
import Signup from "./pages/Signup";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RequestInfo from "./pages/RequestInfo";
import HowThisWorks from "./pages/HowThisWorks";
import Jobs from "./pages/Jobs";
import Apply from "./pages/apply";
import AboutUs from "./pages/AboutUs";
import Job from "./pages/Job/Index";
import News from "./pages/News";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path={APP_ROUTES.home} element={<HomePage />} />
      <Route path={APP_ROUTES.tests} index element={<TestsPage />} />
      <Route path={`${APP_ROUTES.tests}/:id`} element={<TestDetail />} />
      <Route path={`${APP_ROUTES.signUp}`} element={<Signup />} />
      <Route path={`${APP_ROUTES.reqForInfo}`} element={<RequestInfo />} />
      <Route path={`${APP_ROUTES.news}`} element={<News />} />
      <Route path={`${APP_ROUTES.news}/:id`} element={<NewsArticle />} />
      <Route path={`${APP_ROUTES.howThisWorks}`} element={<HowThisWorks />} />
      <Route path={`${APP_ROUTES.jobs}`} element={<Jobs />} />
      <Route path={`${APP_ROUTES.apply}`} element={<Apply />} />
      <Route path={`${APP_ROUTES.aboutUs}`} element={<AboutUs />} />
      {/* <Route path={`${APP_ROUTES.job}`} element={<Job />} /> */}
      <Route path={APP_ROUTES.notFound} element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function Layouts() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <div className="flex-1 flex min-h-[70vh]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
