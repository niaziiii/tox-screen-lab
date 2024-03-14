import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomePage from "@/pages/Home";
import TestsPage from "@/pages/Tests";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
