import { FileSearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber } from "antd";

export default function FormSearch() {
  return (
    <div className="p-4 border">
      <Form name="trigger" layout="vertical" autoComplete="off">
        <Form.Item label="Họ tên" name="fullName" rules={[{ required: true }]}>
          <Input placeholder="Nguyễn Văn A" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Số căn cước công dân"
          name="CCCD"
          validateDebounce={1000}
          rules={[
            {
              len: 12,
              message: "Số căn cước không đúng định dạng",
              required: true,
            },
          ]}
        >
          <Input placeholder="036093002023" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Số điện thoại"
          name="SĐT"
          validateDebounce={1000}
          rules={[
            {
              len: 10,
              message: "SĐT không đúng định dạng",
              required: true,
              validator(rule, value, callback) {
                if (typeof value === "string" || !value) {
                  return Promise.reject();
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <InputNumber className="!w-full" placeholder="0978764356" />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-center items-center">
            <Button
              icon={<FileSearchOutlined />}
              iconPosition="end"
              type="primary"
              htmlType="submit"
              className="w-[250px]"
            >
              Tra cứu
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
