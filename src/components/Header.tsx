import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </div>
  );
};

export default Header;
