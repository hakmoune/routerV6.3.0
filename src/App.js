import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import { Features } from "./components/Features";
import { New } from "./components/New";
import { Users } from "./components/Users";
import { User } from "./components/User";
import { Admin } from "./components/Admin";
import { ErrorPage } from "./components/ErrorPage";
import { Menu } from "./UI/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
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

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
