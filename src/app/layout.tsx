import type { Metadata } from "next";

import "./globals.css";
import Layout from "./components/Layout";
import { roboto } from "./utils/Font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark:bg-dark-background dark:text-white bg-light-background text-light-text-primary ${roboto.className}`}
      >
        <Layout>
          <section>{children}</section>
        </Layout>
      </body>
    </html>
  );
}
