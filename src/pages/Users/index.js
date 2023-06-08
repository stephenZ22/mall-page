import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import UserList from "../../components/Users/UserList";

function Users() {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Users Page</h2>
      <UserList></UserList>
      <Button>
        <Link to="/">首页</Link>
      </Button>
    </div>
  );
}

export default Users;
