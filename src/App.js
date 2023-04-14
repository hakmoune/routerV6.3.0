import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { ErrorPage } from "./components/ErrorPage";
import { Menu } from "./UI/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Menu />
              <Home />
            </React.Fragment>
          }
        />

        <Route
          path="/contact"
          element={
            <React.Fragment>
              <Menu />
              <Contact />
            </React.Fragment>
          }
        />

        <Route
          path="/about"
          element={
            <React.Fragment>
              <Menu />
              <About />
            </React.Fragment>
          }
        />

        <Route
          path="*"
          element={
            <React.Fragment>
              <Menu />
              <ErrorPage />
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
