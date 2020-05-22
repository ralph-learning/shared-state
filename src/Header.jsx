import React from "react";
import { useStateValue } from "./State";

export default function Header() {
  const [{ user }] = useStateValue();

  return (
    <nav className="navbar">
      <li>Example</li>
      <li>{user.name}</li>
    </nav>
  );
}
