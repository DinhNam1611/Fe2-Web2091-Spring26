import React from 'react'
import { Table } from "antd";

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
        title: "Age",
        dataIndex: "age",
    },
    {
        title: "Major",
        dataIndex: "major",
    },
    
];

const data = [
    {
        key: 1,
        id: 1,
        name: "Nam",
        age: 20,
        major: "IT",
    },
    {
        key: 2,
        id: 2,
        name: "Linh",
        age: 21,
        major: "Business",
    },
    {
        key: 3,
        id: 3,
        name: "Hà",
        age: 19,
        major: "Design",
    },
];

function Lab2() {
    return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
    );
}

export default Lab2