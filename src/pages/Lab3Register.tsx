import { Form, Input, Button } from "antd";

const Lab3Register = () => {

  const onFinish = (values : any) => {
    console.log("Form Data:", values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 400 }}
    >

      {/* Name */}
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: "Vui lòng nhập tên!" }
        ]}
      >
        <Input placeholder="Nhập tên" />
      </Form.Item>

      {/* Email */}
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Vui lòng nhập email!" },
          { type: "email", message: "Email không đúng định dạng!" }
        ]}
      >
        <Input placeholder="Nhập email" />
      </Form.Item>

      {/* Phone */}
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          { required: true, message: "Vui lòng nhập số điện thoại!" }
        ]}
      >
        <Input placeholder="Nhập số điện thoại" />
      </Form.Item>

      {/* Password */}
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Vui lòng nhập mật khẩu!" },
          { min: 6, message: "Password tối thiểu 6 ký tự!" }
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Nhập password" />
      </Form.Item>

      {/* Confirm Password */}
      <Form.Item
        label="Confirm Password"
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "Vui lòng xác nhận password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Password không trùng!");
            },
          }),
        ]}
      >
        <Input.Password placeholder="Nhập lại password" />
      </Form.Item>

      {/* Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Đăng ký
        </Button>
      </Form.Item>

    </Form>
  );
};

export default Lab3Register;