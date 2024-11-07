import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="../../logo.svg"
          alt="Logo"
          className="logo-image"
          style={{ width: "30px", height: "30px" }}
        />
        <span style={{ fontWeight: "400", fontSize: "26px" }}>Invertia</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
