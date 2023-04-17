import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import { Features } from "./components/Features";
import { New } from "./components/New";
import { Users } from "./components/Users";
import { User } from "./components/User";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import { Login } from "./components/Login";
import { ErrorPage } from "./components/ErrorPage";
import { Menu } from "./UI/Menu";
const LazyLoading = React.lazy(() => import("./components/About"));

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyLoading />
            </React.Suspense>
          }
        />

        <Route path="/order-summary" element={<OrderSummary />} />

        <Route path="/products" element={<Products />}>
          <Route index element={<Features />} />
          <Route path="features" element={<Features />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<User />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
