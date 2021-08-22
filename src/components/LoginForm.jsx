import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = ({onFinish, onFinishFailed}) => {

  return (
    <Form
      name="basic"
      className="login_form"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 100,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Логин"
        name="login"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите логин',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите пароль',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 50,
        }}
      >
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
