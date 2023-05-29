// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';

const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">

        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

        <li>
            <Link><FaHome></FaHome> User Home</Link>
          </li>

          <li>
            <Link><FaCalendarAlt></FaCalendarAlt> Reservation</Link>
          </li>

        <li>
            <Link><FaWallet></FaWallet> Payment History</Link>
          </li>

          <li>
            <Link><FaShoppingCart></FaShoppingCart> My Cart </Link>
          </li>
          <div className="divider"></div>

          <li>
            <Link to="/"><FaHome></FaHome> Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
