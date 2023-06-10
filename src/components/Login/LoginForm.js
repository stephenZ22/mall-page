import React from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import Api from "../../tools/api";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleFinish = (values) => {
    Api.post("/users/login", {
      login_name: values.login_name,
      pass_word: values.password,
    })
      .then((response) => {
        refreshAuthToken(response.data.token);
        message.success("登录成功");
        navigate("/");
      })
      .catch((error) => {
        message.error("登录失败", error.message);
      });
  };

  const refreshAuthToken = (newToken) => {
    localStorage.removeItem("authToken");
    localStorage.setItem("authToken", newToken);
  };

  return (
    <Form onFinish={HandleFinish}>
      <Form.Item
        label="登录名"
        name="login_name"
        rules={[{ required: true, message: "Please input your login name!" }]}
      >
        <Input placeholder="登录名" />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="密码" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
