import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Input, Checkbox, Button, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Lab4 = () => {
    const queryClient = useQueryClient();

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: async (data: any) => {
            const res = await axios.post("http://localhost:3000/categories", data);
            return res.data;
        },

        onSuccess: () => {
            toast.success("Thêm danh mục thành công!");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },

        onError: () => {
            toast.error("Có lỗi xảy ra!");
        }


    })

    const onFinish = (values: any) => {
        mutate(values);
    }


    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data.map((item : any) => ({
                value: item.id,
                label: item.title,
            }));
        },
    });


    return (
        <>
            <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-xl font-bold mb-5 text-gray-800">
                        Thêm danh mục truyện
                    </h2>

                    <Form layout="vertical" onFinish={onFinish} className="space-y-4">

                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true, message: "Không được để trống title!" }]}
                        >
                            <Input className="rounded-lg" placeholder="Nhập tiêu đề" />
                        </Form.Item>

                        <Form.Item label="Description" name="description">
                            <Input.TextArea className="rounded-lg" placeholder="Nhập mô tả" />
                        </Form.Item>

                        <Form.Item name="active" valuePropName="checked">
                            <Checkbox>Active</Checkbox>
                        </Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isPending}
                            className="w-full rounded-lg"
                        >
                            Submit
                        </Button>

                    </Form>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-xl font-bold mb-5 text-gray-800">
                        Thêm truyện
                    </h2>

                    <Form layout="vertical" onFinish={onFinish} className="space-y-4">

                        <Form.Item name="title" label="Title">
                            <Input className="rounded-lg" />
                        </Form.Item>

                        <Form.Item name="categoryId" label="Category">
                            <Select
                                placeholder="Chọn danh mục"
                                options={categories}
                                className="rounded-lg"
                            />
                        </Form.Item>

                        <Button type="primary" htmlType="submit" block className="rounded-lg">
                            Submit
                        </Button>

                    </Form>
                </div>

            </div>
        
        </>
    );
};

export default Lab4;

