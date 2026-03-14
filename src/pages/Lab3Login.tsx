import { Button, Form, Input, InputNumber, Select } from 'antd';
import Password from 'antd/es/input/Password';
import React from 'react'

function Lab3Login() {
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={[{ required: true }, { type: 'email' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Mật khẩu" name="password" rules={[{ required: true }, { type: 'string', min: 6 }]}>
                <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit">
                Đăng nhập
            </Button>
        </Form>
    );
}

export default Lab3Login