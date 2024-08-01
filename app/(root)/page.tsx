"use client";
import { doGet } from "@/utils/doMethod";
import { FileSearchOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, notification } from "antd";
import { useRouter } from "next/navigation";

type FormType = {
  idCard: string;
  phoneNumber: string;
  fullName: string;
};

export default function IndexPage() {
  const router = useRouter();
  const [api, context] = notification.useNotification();

  const accountMutation = useMutation({
    mutationKey: ["account"],
    mutationFn: async (payload: FormType) => {
      const $filter = {
        fullName: payload.fullName,
        idCard: payload.idCard,
        phoneNumber: payload.phoneNumber,
      };
      const params = { s: JSON.stringify($filter) };

      return await doGet("/account", params);
    },
    onSuccess: () => {
      api.info({
        message: null,
        description: "Truy xuất thông tin tài khoản thành công",
      });
    },
  });

  const onFinishForm = (data: FormType) => {
    accountMutation.mutate(data);
  };

  return (
    <div className="p-6 border">
      {context}
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
                if (
                  !/^-?\d*\.?\d*$/.test(value) ||
                  !value ||
                  value.length !== 10
                ) {
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
