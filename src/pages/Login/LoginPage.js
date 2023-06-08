import React from "react";
import { Layout, Row, Col } from "antd";
import LoginForm from "../../components/Login/LoginForm";
import "../../assets/css/LoginPage/login.css";

const { Content } = Layout;

function LoginPage() {
  return (
    <Layout className="login-layout">
      <Content>
        <Row className="login-row">
          <Col span={16} className="login-bg"></Col>
          <Col span={8} className="login-form">
            <Row justify="center" align="middle" style={{ height: "100%" }}>
              <Col span={12}>
                <LoginForm></LoginForm>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default LoginPage;
