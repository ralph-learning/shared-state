import React from "react";

import { useStateValue } from "./State";
import Input from "./Input";

export default function Main() {
  const [{ user }] = useStateValue();

  return (
    <main className="main">
      <h3>Hello, {user.name}</h3>
      <p>
        Testing shared state using <strong>React hooks</strong> and{" "}
        <strong>Context API</strong>.
      </p>
      <br />
      <Input />
    </main>
  );
}
