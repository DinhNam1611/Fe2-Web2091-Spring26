import { Button, Input, Layout } from 'antd'
import React from 'react'
import { Form } from 'antd'

const { Header, SideBar, Content } = Layout

function Lab1() {
    const onFinish = (values: any) => {
        console.log("Success:", values);
    }
    return (
        <div>
            <Layout>
                <Header style={{ background: "white" }}>Header</Header>
                <SideBar>SideBar</SideBar>
                <Content >Content</Content>
            </Layout>

            <Form onFinish={onFinish}>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: "Nhập Name" }]}
                >
                    <Input placeholder="Name" />

                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: "Nhập email" }]}
                >
                    <Input placeholder="Email" />

                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "Nhập Password" }]}
                >
                    <Input placeholder="Password" />

                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Login
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default Lab1