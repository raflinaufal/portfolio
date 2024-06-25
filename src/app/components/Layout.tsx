"use client";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSidebar } from "../hooks/hooks";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div className="flex flex-col md:flex-row min-h-screen mx-auto">
      <Sidebar isOpen={isOpen} />
      <div className="flex flex-col flex-1 md:max-w-screen-md mx-auto w-full">
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
