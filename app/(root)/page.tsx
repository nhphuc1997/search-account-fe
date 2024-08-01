"use client";
import { FileSearchOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

type FormType = {
  idCard: string;
  phoneNumber: string;
  fullName: string;
};

export default function IndexPage() {
  const router = useRouter();

  const onFinishForm = (data: FormType) => {
    router.push("/search?");
  };

  return (
    <div className="p-6 border">
      <Form
        name="trigger"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinishForm}
      >
        <Form.Item<FormType>
          label="Họ tên"
          name="fullName"
          hasFeedback
          rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
        >
          <Input placeholder="Nguyễn Văn A" />
        </Form.Item>

        <Form.Item<FormType>
          hasFeedback
          label="Số căn cước công dân"
          name="idCard"
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

        <Form.Item<FormType>
          hasFeedback
          label="Số điện thoại"
          name="phoneNumber"
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
          <Input className="!w-full" placeholder="0978764356" />
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
