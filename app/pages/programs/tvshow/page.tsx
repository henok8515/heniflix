import React from "react";
import Tvshow from "./Tvshow";
import Link from "next/link";

const pages = () => {
  return (
    <div>
      <Link href="/pages/programs/home">go back</Link>
      <p>Tv shows</p>

      <Tvshow />
    </div>
  );
};

export default pages;
