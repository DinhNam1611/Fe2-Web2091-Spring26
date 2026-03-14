import React from 'react'
import { Form, Input, InputNumber, Button } from "antd";

function Lab3Product() {
    const onFinish = (values : any) => {
        console.log("Product Data:", values);
    };

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ maxWidth: 500 }}
        >

            {/* Tên sản phẩm */}
            <Form.Item
                label="Tên sản phẩm"
                name="name"
                rules={[
                    { required: true, message: "Vui lòng nhập tên sản phẩm!" }
                ]}
            >
                <Input placeholder="Nhập tên sản phẩm" />
            </Form.Item>

            {/* Giá */}
            <Form.Item
                label="Giá"
                name="price"
                rules={[
                    { required: true, message: "Vui lòng nhập giá!" },
                ]}
            >
                <InputNumber
                    placeholder="Nhập giá"
                    className="w-full"
                    min={0}
                />
            </Form.Item>

            {/* Số lượng */}
            <Form.Item
                label="Số lượng"
                name="quantity"
                rules={[
                    { required: true, message: "Vui lòng nhập số lượng!" } , 
                ]}
            >
                <InputNumber
                    placeholder="Nhập số lượng"
                    className="w-full"
                    min={1}
                />
            </Form.Item>

            {/* Mô tả */}
            <Form.Item
                label="Mô tả"
                name="description"
            >
                <Input.TextArea
                    rows={4}
                    placeholder="Nhập mô tả sản phẩm"
                />
            </Form.Item>

            {/* Submit */}
            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Thêm sản phẩm
                </Button>
            </Form.Item>

        </Form>
    );
}

export default Lab3Product