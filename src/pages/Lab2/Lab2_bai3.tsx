import React from 'react'
import { Table, Tag, Button } from "antd";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (status) => (
            <Tag color={status === "active" ? "green" : "red"}>
                {status.toUpperCase()}
            </Tag>
        ),
    },
    {
        title: "Action",
        render: () => (
            <>
                <Button type="primary" style={{ marginRight: 8 }}>
                    Edit
                </Button>
                <Button danger>
                    Delete
                </Button>
            </>
        ),
    },
];

const data = [
    {
        key: 1,
        id: 1,
        name: "Nguyen Van A",
        email: "a@gmail.com",
        status: "active",
    },
    {
        key: 2,
        id: 2,
        name: "Tran Thi B",
        email: "b@gmail.com",
        status: "inactive",
    },
    {
        key: 3,
        id: 3,
        name: "Le Van C",
        email: "c@gmail.com",
        status: "active",
    },
    {
        key: 4,
        id: 4,
        name: "Pham Thi D",
        email: "d@gmail.com",
        status: "inactive",
    },
    {
        key: 5,
        id: 5,
        name: "Hoang Van E",
        email: "e@gmail.com",
        status: "active",
    },
];


function Lab2_bai3() {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 3 }}
            bordered
        />
    );
}

export default Lab2_bai3