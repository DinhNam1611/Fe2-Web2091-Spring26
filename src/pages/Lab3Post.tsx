import { Form, Input, Button, Select } from "antd";
import { useState } from "react";

const Lab3Post = () => {
  const [data, setData] = useState(null);

  const onFinish = (values : any) => {
    setData(values);
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>

      <h2>Thêm bài viết</h2>

      <Form layout="vertical" onFinish={onFinish}>

        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Select>
            <Select.Option value="tech">Tech</Select.Option>
            <Select.Option value="news">News</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Slug" name="slug">
          <Input />
        </Form.Item>

        <Form.Item label="Content" name="content">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Image URL" name="image">
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>

      </Form>

      {/* Hiển thị dữ liệu */}
      {data && (
        <div style={{ marginTop: "20px" }}>
          <h3>Dữ liệu bài viết</h3>

          <p>Title: {data.title}</p>
          <p>Category: {data.category}</p>
          <p>Slug: {data.slug}</p>
          <p>Content: {data.content}</p>

          <img src={data.image} width="200" />
        </div>
      )}

    </div>
  );
};

export default Lab3Post;