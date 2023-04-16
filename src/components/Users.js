import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active"; // Si la condition est vrais elle va nous retourner "true" sinon "false"

  const id1 = 1;
  const id2 = 2;
  const id3 = 3;
  //Min 11
  return (
    <div className="container">
      <h6>
        <Link to={`${id1}`}>User 1</Link>
      </h6>
      <h6>
        <Link to={`${id2}`}>User 2</Link>
      </h6>
      <h6>
        <Link to={`${id3}`}>User 3</Link>
      </h6>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>

      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      <div>
        {showActiveUsers ? "List of active Users" : "List oF all users"}
      </div>
    </div>
  );
}
