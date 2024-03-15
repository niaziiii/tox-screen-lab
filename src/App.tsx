import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/Home";
import TestsPage from "./pages/Tests";
import NotFound from "./pages/NotFound";
import Header from "./common/Header";
import Footer from "./common/Footer";
import TestDetail from "./pages/TestDetail";
import { APP_ROUTES } from "./utils/constant";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={APP_ROUTES.home} element={<Layouts />}>
            <Route index element={<HomePage />} />
            <Route path={APP_ROUTES.tests} element={<TestsPage />} />
            <Route path={`${APP_ROUTES.tests}/:id`} element={<TestDetail />} />
            <Route path={`${APP_ROUTES.signUp}`} element={<Signup />} />
            <Route path={APP_ROUTES.notFound} element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
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
