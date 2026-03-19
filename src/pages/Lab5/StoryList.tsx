import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, Popconfirm, Spin, Table } from 'antd';
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function StoryList() {

    const [keyword, setKeyword] = useState("");

    const { data, isLoading, isError } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        }
    })

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (id: number) =>
            await axios.delete(`http://localhost:3000/stories/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["stories"] });
        },
    });

    // 🔥 FILTER
    const filteredData = data?.filter((item: any) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
    );

    const columns = [
        { title: "ID", dataIndex: "id" },
        { title: "Title", dataIndex: "title" },
        { title: "Author", dataIndex: "author" },
        { title: "Image", dataIndex: "image" },
        { title: "Description", dataIndex: "description" },
        {
            title: "Created At",
            dataIndex: "createdAt",
            render: (data: string) =>
                new Date(data).toLocaleDateString("vi-VN"),
        },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <Popconfirm
                    title="Delete the story"
                    description="Are you sure to delete this story?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => mutate(record.id)}
                >
                    <Button danger>Delete</Button>
                </Popconfirm>
            )
        }
    ]

    if (isLoading) return <Spin />
    if (isError) return <p>Error occurred while fetching stories.</p>

    return (
        <>
            {/* SEARCH */}
            <input
                className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
                type="text"
                placeholder='Search stories...'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />

            <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 5 }} />
        </>
    )
}

export default StoryList