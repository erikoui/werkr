import React, { useEffect, useState } from "react";

export const TestAPI = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch("/api/");
      const data = await response.json().catch(console.log);
      setState(data);
    };
    makeRequest();
  });

  return (
    <p>
      placeholder
      <br />
      {state.hello}
    </p>
  );
};
