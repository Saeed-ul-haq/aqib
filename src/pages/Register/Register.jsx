import React from "react";
import logo from "../../assets/logo.jpg";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined,MailFilled  } from "@ant-design/icons";
export default function Register() {
  
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
        >
            <Form.Item
            name="email"
            label='Email'
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
            suffix={<MailFilled  className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="username"
            label='username'
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
            suffix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
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
              Register
            </Button>

           
          </Form.Item>
        </Form>
        </div>
      </div>
    );
  
}
