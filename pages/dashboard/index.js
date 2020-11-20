import Head from "next/head";
import requiredAuth from "../../components/requiredAuth/requiredAuth";
import { useDispatch } from "react-redux";
import store from "../../store";
import { doLogout } from "../../lib/slices/userSlice";
import { useState } from "react";
import Link from "next/link";
import FixedMenuLayout from "../../components/MenuHeader/fixedMenuHeader";

const SidebarExampleSidebar = () => {
  return (
    <>
      <FixedMenuLayout />
      <h1>Dashboard</h1>
    </>
  );
};

export default SidebarExampleSidebar;
