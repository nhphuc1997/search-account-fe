import { doPost } from "@/utils/doMethod";
import { useMutation } from "@tanstack/react-query";
import { Button, Col, Form, Input, notification, Row } from "antd";
import { useState } from "react";

export default function FormVerifyCode() {
  const [formVerifyCode] = Form.useForm();
  const [api, context] = notification.useNotification();
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const verifyCodeMutation = useMutation({
    mutationKey: ["verify-code"],
    mutationFn: async (payload: any) => {
      setBtnLoading(true);
      return await doPost("/verify-code", payload);
    },
    onSuccess(data, variables, context) {
      if (data?.statusCode === 200) {
        formVerifyCode.resetFields();
        api.success({
          message: null,
          description: "Xác minh giao dịch thành công",
        });
        setBtnLoading(false);
        return true;
      }
      setBtnLoading(false);
      return false;
    },
  });

  const onFinishVerifyCode = (values: any) => {
    verifyCodeMutation.mutate(values);
  };

  return (
    <div className="p-4 border rounded-lg">
      {context}
      <Form
        form={formVerifyCode}
        autoComplete="off"
        onFinish={onFinishVerifyCode}
      >
        <Form.Item
          name="code"
          label="Nhập mã xác minh"
          rules={[{ required: true, message: "Vui lòng nhập mã xác minh" }]}
        >
          <Input placeholder="87689" />
        </Form.Item>

        <div className="flex justify-center items-center">
          <Button
            loading={btnLoading}
            className="w-[150px]"
            type="primary"
            htmlType="submit"
          >
            Hoàn tất
          </Button>
        </div>
      </Form>
    </div>
  );
}
