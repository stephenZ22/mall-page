// src/components/UserList.js

import React, { useState, useEffect } from "react";
import Config from "../config";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${Config.userListPath}`, { mode: "cors" }) // 发起 GET 请求获取用户数据
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold my-2">User List</h2>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">登录名</th>
            {/* <th className="border border-gray-400 px-4 py-2"></th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-400 px-4 py-2">{user.ID}</td>
              <td className="border border-gray-400 px-4 py-2">
                {user.login_name}
              </td>
              {/* <td className="border border-gray-400 px-4 py-2">{user.email}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
