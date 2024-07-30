import { useAccountStore } from "@/stores/account.store";
import { doGet } from "@/utils/doMethod";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, FormProps, Input } from "antd";
import { useEffect, useRef } from "react";

type FieldType = {
  searchToken?: string;
};

export default function FormSearch() {
  const accountStore = useAccountStore((state: any) => state);
  const submitBtn = useRef<any>(null);

  const accountMutation = useMutation({
    mutationKey: ["account-muation", [accountStore.page]],
    mutationFn: async (values: FieldType) => {
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
    },
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    accountMutation.mutate(values);
  };

  useEffect(() => {
    submitBtn?.current.click();
  }, [accountStore.page]);

  return (
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
  );
}
