import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css"; // Import your CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-heading">Dashboard</div>
      <ul className="sidebar-list">
        <li>
          <Link to="/purchase" activeClassName="active-link">
            Purchase
          </Link>
        </li>
        <li>
          <NavLink to="/sales" activeClassName="active-link">
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink to="/expenses" activeClassName="active-link">
            Expenses
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
