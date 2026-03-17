import React from 'react'
import { Table } from "antd";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Product Name",
        dataIndex: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Category",
        dataIndex: "category",
    },
];

const data = [
    {
        key: 1,
        id: 1,
        name: "iPhone 15",
        price: 25000000,
        category: "Phone",
    },
    {
        key: 2,
        id: 2,
        name: "Samsung S23",
        price: 22000000,
        category: "Phone",
    },
    {
        key: 3,
        id: 3,
        name: "Macbook Pro",
        price: 45000000,
        category: "Laptop",
    },
    {
        key: 4,
        id: 4,
        name: "AirPods Pro",
        price: 6000000,
        category: "Accessory",
    },
    {
        key: 5,
        id: 5,
        name: "iPad Air",
        price: 18000000,
        category: "Tablet",
    },
];


function Lab2_bai2() {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 3 }}
        />
    );
}

export default Lab2_bai2