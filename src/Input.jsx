import React from "react";

import { useStateValue } from "./State";

export default function Input() {
  const [state, dispatch] = useStateValue();

  function handleChange(event) {
    const { value } = event.target;

    dispatch({ name: value, type: "CHANGE_USER_NAME" });
  }

  return (
    <div className="register">
      <label htmlFor="name">Name</label>
      <input
        value={state.user.name}
        onChange={handleChange}
        type="text"
        id="name"
      />
    </div>
  );
}
