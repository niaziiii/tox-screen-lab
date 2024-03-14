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

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<HomePage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="*" element={<NotFound />} />
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
