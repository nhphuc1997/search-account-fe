import { useAccountStore } from "@/stores/account.store";
import { doGet } from "@/utils/doMethod";
import { FileSearchOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, notification } from "antd";
import { useState } from "react";

type FormType = {
  idCard: string;
  phoneNumber: string;
  accountName: string;
};

export default function FormSearch() {
  const [api, context] = notification.useNotification();
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const accountStore = useAccountStore((state: any) => state);

  const accountMutation = useMutation({
    mutationKey: ["account"],
    mutationFn: async (payload: FormType) => {
      setBtnLoading(true);
      accountStore.setLoading(true);
      const $filter = {
        accountName: payload?.accountName,
        idCard: payload?.idCard,
        phoneNumber: payload?.phoneNumber,
      };
      const params = { s: JSON.stringify($filter) };
      return await doGet("/account", params);
    },
    onSuccess: (data, variables, context) => {
      if (data?.data?.length > 0) {
        api.info({
          message: null,
          description: "Truy xuất thông tin tài khoản thành công",
        });
        accountStore.setAccounts(data?.data);
        return;
      }

      api.warning({
        message: null,
        description: "Không tìm thấy thông tin tài khoản",
      });
      accountStore.setAccounts([]);
      return;
    },
    onError: () => {
      api.error({
        message: null,
        description: "Truy xuất thông tin tài khoản thất bại",
      });
    },
    onSettled: () => {
      setBtnLoading(false);
      accountStore.setLoading(false);
    },
  });

  const onFinishForm = (data: FormType) => {
    accountMutation.mutate(data);
  };

  return (
    <div className="">
      {context}
      <Form
        name="trigger"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinishForm}
      >
        <Form.Item<FormType>
          label="Họ tên"
          name="accountName"
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
              loading={btnLoading}
            >
              Tra cứu
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
