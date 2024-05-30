import Link from "next/link";
import React from "react";
import Header from "./components/Header";

function page() {
  return (
    <div>
      <Header />
      <Link href="/pages/Login">sign out</Link>
    </div>
  );
}

export default page;
