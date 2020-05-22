import React from "react";

import { useStateValue } from "./State";
import Input from "./Input";

export default function Main() {
  const [{ user }] = useStateValue();

  return (
    <main className="main">
      Hello, {user.name}
      <br />
      <Input />
    </main>
  );
}
