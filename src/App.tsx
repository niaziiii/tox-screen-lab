import { Outlet } from "react-router-dom";
import HomePage from "./pages/Home";
import TestsPage from "./pages/Tests";
import NotFound from "./pages/NotFound";
import Header from "./common/Header";
import Footer from "./common/Footer";
import TestDetail from "./pages/TestDetail";
import { APP_ROUTES } from "./utils/constant";
import Signup from "./pages/Signup";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RequestInfo from "./pages/RequestInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path={APP_ROUTES.home} element={<HomePage />} />
      <Route path={APP_ROUTES.tests} index element={<TestsPage />} />
      <Route path={`${APP_ROUTES.tests}/:id`} element={<TestDetail />} />
      <Route path={`${APP_ROUTES.signUp}`} element={<Signup />} />
      <Route path={`${APP_ROUTES.reqForInfo}`} element={<RequestInfo />} />
      <Route path={APP_ROUTES.notFound} element={<NotFound />} />{" "}
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
