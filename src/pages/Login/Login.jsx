import React from "react";
import logo from "../../assets/logo.jpg";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login-container">
      <div className="login-component">
        <img src={logo} alt="" className="logo" />
        <p className="login-title">
          <b>Shifa</b> International hospitl limited
        </p>
        <Form
          name="normal_login"
          className="login-form"
          
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            {/* <label>Username</label> */}
            <Input
              suffix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label='Password'
            rules={[


              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            {/* <label>Password</label> */}
            <Input
              suffix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>

            <p className="text-center forgottpass">Forgott Password</p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
