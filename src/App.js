import React from "react";
import Body from "./components/mainpage/Body.jsx";
import "./css/output.css";
import UserContext from "./components/context/userContext";
function App() {
  return (
    <UserContext.Provider>
      <Body />
    </UserContext.Provider>
  );
}

export default App;
