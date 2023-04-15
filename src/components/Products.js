import { Link, Outlet } from "react-router-dom";

export function Products() {
  return (
    <div className="container">
      <div>Products</div>
      <div>
        <input type="text" placeholder="Search for a new product" />
      </div>
      <nav>
        <Link to="features">Features</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}
