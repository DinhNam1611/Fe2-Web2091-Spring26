import { Button, Input, Layout, Modal, Table } from 'antd'
import React, { useState } from 'react'
import { Form } from 'antd'

const { Header, SideBar, Content } = Layout

function Lab1() {
    const onFinish = (values: any) => {
        console.log("Success:", values);
    }

    const columns = [
        { title: "Name", dataIndex: "name" },
        { title: "Email", dataIndex: "email" },
        { title: "Role", dataIndex: "role" },
    ]

    const data = [
        { key: 1, name: "John", email: "john@example.com", role: "User" },
        { key: 2, name: "Jane", email: "jane@example.com", role: "Admin" },
        { key: 3, name: "Bob", email: "bob@example.com", role: "User" },
    ];

    const [open, setOpen] = useState(false);
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

            <Table columns={columns} dataSource={data} />

            <Button onClick={() => { setOpen(true) }} >Add User</Button>

            <Modal
                open={open}
                onOk={() => { setOpen(false) }}
                onCancel={() => { setOpen(false) }}
            >
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
            </Modal>
        </div>
    )
}

export default Lab1