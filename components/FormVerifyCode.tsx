import { Button, Col, Form, Input, Row } from "antd";

export default function FormVerifyCode() {
  const [formVerifyCode] = Form.useForm();

  const onFinishVerifyCode = (values: any) => {
    console.log(values);
    formVerifyCode.resetFields();
  };

  return (
    <div className="p-4 border rounded-lg">
      <Form
        form={formVerifyCode}
        autoComplete="off"
        onFinish={onFinishVerifyCode}
        layout="inline"
      >
        <Form.Item
          name="code"
          label="Nhập mã xác minh"
          rules={[{ required: true, message: "Vui lòng nhập mã xác minh" }]}
        >
          <Input placeholder="87689" className="!w-full" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Hoàn tất
        </Button>
      </Form>
    </div>
  );
}
