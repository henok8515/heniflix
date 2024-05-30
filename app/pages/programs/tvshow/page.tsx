import React from "react";
import Tvshow from "./Tvshow";
import Link from "next/link";
import Header from "@/app/components/Header";

const pages = () => {
  return (
    <div className="">
      <Header />
      <Tvshow />
    </div>
  );
};

export default pages;
