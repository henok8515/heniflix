import React from "react";
import "./homepage.css";
import Card from "../../../components/Card";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Link href="/pages/programs/Movies">Movies</Link>
      <Link href="/pages/programs/tvshow">Tv shows</Link>
    </div>
  );
};

export default HomePage;
