"use client";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSidebar } from "../hooks/hooks";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div className="flex h-min-screen dark:bg-gray-900 dark:text-white">
      <Sidebar isOpen={isOpen} />
      <div className="flex flex-col  max-w-screen-md mx-auto">
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
