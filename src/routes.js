import React from "react";

// Admin Imports
import Visualization from "views/admin/visualization";
import MainDashboard from "views/admin/dashboard";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";


// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAccountBalanceWallet,
} from "react-icons/md";

const routes = [
  {
    name: 'Landscape',
    layout: '/admin',
    path: 'visualize',
    icon: <MdAccountBalanceWallet className="h-5 w-5" />,
    component: <Visualization />,
  },
  {
    name: 'Phân tích',
    layout: '/admin',
    path: 'dashboard',
    icon: <MdHome className="h-5 w-5" />,
    component: <MainDashboard />,
  },
  {
    name: 'Thử nghiệm - LEAN',
    layout: '/admin',
    path: 'nft-marketplace',
    icon: <MdOutlineShoppingCart className="h-5 w-5" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Dự án chuyển đổi',
    layout: '/admin',
    icon: <MdBarChart className="h-5 w-5" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: 'Cài đặt',
    layout: '/admin',
    path: "profile",
    icon: <MdPerson className="h-5 w-5" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-5 w-5" />,
    component: <SignIn />,
    nonDisplay: true
  },
  
];
export default routes;
