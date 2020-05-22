import React from "react";

import { useStateValue } from "./State";
import Input from "./Input";

export default function Main() {
  const [{ name }] = useStateValue();

  return (
    <main>
      Hello, {name}
      <Input />
    </main>
  );
}
