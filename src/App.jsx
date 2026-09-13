import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/RequireAuth";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { useLocalStorage } from "usehooks-ts";
import { AuthContext } from "./AuthContext";

function App() {
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Router>
        <Routes>
          <Route index element={<Login />} />

          <Route
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
            path="/dashboard"
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
