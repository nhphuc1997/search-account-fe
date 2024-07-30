import { useAccountStore } from "@/stores/account.store";
import { doGet } from "@/utils/doMethod";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, notification } from "antd";
import { useEffect, useRef } from "react";

type FieldType = {
  searchToken?: string;
};

export default function FormSearch() {
  const accountStore = useAccountStore((state: any) => state);
  const submitBtn = useRef<any>(null);
  const [api, contextHolder] = notification.useNotification();

  const accountMutation = useMutation({
    mutationKey: ["account-muation", [accountStore.page]],
    mutationFn: async (values: FieldType) => {
      accountStore.setLoading(true);
      const $filter = {
        $or: [
          { phoneNumber: { $cont: values?.searchToken } },
          { idCard: { $cont: values?.searchToken } },
          { accountDigit: { $cont: values?.searchToken } },
        ],
      };
      const params = {
        s: JSON.stringify($filter),
        limit: 5,
        page: accountStore.page,
      };
      return await doGet("/account", params);
    },
    onSuccess(data) {
      accountStore.setAccounts(data?.data?.data);
      accountStore.setTotal(data?.data?.total);
      accountStore.setPage(data?.data?.page);
      accountStore.setLoading(false);
    },
    onError() {
      api.info({
        message: null,
        description: `Trích xuất thông tin tài khoản thất bại`,
      });
    },
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    accountMutation.mutate(values);
  };

  useEffect(() => {
    submitBtn?.current?.click();
  }, [accountStore.page]);

  return (
    <div>
      {contextHolder}
      <Form onFinish={onFinish} autoComplete="off" layout="inline">
        <Form.Item<FieldType>
          name="searchToken"
          rules={[{ required: true, message: "Trường bắt buộc" }]}
        >
          <Input placeholder="Nhập SĐT/CCCD/CMT" type="number" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" ref={submitBtn}>
            Trích xuất
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
