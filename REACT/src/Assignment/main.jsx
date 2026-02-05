import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

import Dashboard from "./Dashboard"

const AssignmentMain = () => {
  const [page, setPage] = useState("register");
  const [user, setUser] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {page === "register" && <Register setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} setUser={setUser} />}
      {page === "dashboard" && <Dashboard user={user}/>}
    </div>
  );
};

export default AssignmentMain;
