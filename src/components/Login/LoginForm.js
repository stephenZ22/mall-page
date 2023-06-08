import React from "react";
import { Form, Input, FormItem, Button, message } from "antd";
import { useDispatch } from "react-redux";
import Api from "../../tools/api";

function LoginForm({ onFinish }) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    // onFinish(values);
    Api.post("/users/login", {
      login_name: values.login_name,
      password: values.password,
    }).then((response) => {
      const data = response.json();
      const token = data.token;

      dispatch({ type: "SET_TOKEN", payload: token });
      message.success("登录成功");
    });
    //   .catch((error) => {
    //     message.error("登录失败");
    //   });
  };

  return (
    <Form name="login" onFinish={handleSubmit}>
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
