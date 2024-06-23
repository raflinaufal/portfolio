import Hero from "@/app/components/Hero";
import Layout from "@/app/components/Layout";
import ArticlesPage from "./components/Article";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <ArticlesPage />
      <Services />
    </>
  );
}
