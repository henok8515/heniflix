import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      welcom user
      <Link href="/Login">sign out</Link>
    </div>
  );
}

export default page;
