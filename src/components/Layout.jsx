import React from "react";
import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Hero</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
