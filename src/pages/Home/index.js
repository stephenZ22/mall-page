// src/pages/Home.js

import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Home() {
  // Home 页面组件的逻辑代码
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">Home Page</h1>
      <li>
        <Button>
          <Link to="/users">用户列表</Link>
        </Button>
      </li>
    </div>
  );
}

export default Home;
