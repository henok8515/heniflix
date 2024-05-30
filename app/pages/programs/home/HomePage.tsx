import React from "react";
import "./homepage.css";
import Link from "next/link";
import Header from "@/app/components/Header";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      {/* <Link href="/pages/programs/Movies">Movies</Link>
      <Link href="/pages/programs/tvshow">Tv shows</Link> */}
    </div>
  );
};

export default HomePage;
