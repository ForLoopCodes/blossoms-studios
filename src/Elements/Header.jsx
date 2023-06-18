import React from "react";

export default function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
      </ul>
    </nav>
  );
}
