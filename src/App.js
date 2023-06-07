// src/App.js

import React from "react";
import UserList from "./components/UserList";
// import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">User Management System</h1>
      <UserList />
      {/* <UserForm /> */}
    </div>
  );
}

export default App;
