import { Button, Form, FormProps, Input } from "antd";

type FieldType = {
  searchToken?: string;
};

export default function FormSearch() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form onFinish={onFinish} autoComplete="off">
      <Form.Item<FieldType>
        name="searchToken"
        rules={[{ required: true, message: "Trường bắt buộc" }]}
      >
        <Input placeholder="Nhập SĐT/CCCD/CMT" />
      </Form.Item>
    </Form>
  );
}
