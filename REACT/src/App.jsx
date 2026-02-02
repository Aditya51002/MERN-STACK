import React from "react";
import FetchAPI from "./API/fetchAPI";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>User Data</h2>
      <FetchAPI />
    </div>
  );
};

export default App;
