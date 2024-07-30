import { useAccountStore } from "@/stores/account.store";
import { useProfileStore } from "@/stores/profile.store";
import { useTransactionsStore } from "@/stores/transaction.store";
import { doGet } from "@/utils/doMethod";
import { useMutation } from "@tanstack/react-query";
import { Button, Pagination, Table, TableColumnsType, Tag } from "antd";
import { useEffect, useRef, useState } from "react";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default function Accounts() {
  const accountStore = useAccountStore((state: any) => state);
  const profileStore = useProfileStore((state: any) => state);
  const transactionStore = useTransactionsStore((state: any) => state);

  const retrieveBtn = useRef<any>(null);

  const transactionMutation = useMutation({
    mutationKey: ["transaction-history", [transactionStore.page]],
    mutationFn: async (accountDigit: string) => {
      transactionStore.setLoading(true);
      const $filter = {
        "retrieverAccount.accountDigit": accountDigit,
      };

      const params = {
        s: JSON.stringify($filter),
        limit: 5,
        page: transactionStore.page,
      };
      return await doGet("/transaction-history", params);
    },
    onSuccess(data) {
      transactionStore.setTransactions(data?.data);
      transactionStore.setTotal(data?.data?.total);
      transactionStore.setPage(data?.data?.page);
      transactionStore.setLoading(false);
    },
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: "SĐT",
      dataIndex: "phoneNumber",
      width: 150,
    },
    {
      title: "CCCD/CMT",
      dataIndex: "idCard",
      width: 150,
    },
    {
      title: "Tên tài khoản",
      dataIndex: "accountName",
    },
    {
      title: "Số tài khoản",
      dataIndex: "accountDigit",
    },
    {
      title: "Ngân hàng",
      align: "center",
      render: (data) => (
        <div className="flex justify-center items-center">
          <Tag color="lime">{data?.bank?.name}</Tag>
        </div>
      ),
    },
    {
      title: "",
      align: "center",
      render: (profile) => (
        <div
          ref={retrieveBtn}
          className="flex justify-center items-center"
          onClick={() => {
            profileStore.setProfile(profile);
            transactionMutation.mutate(profile.accountDigit);
          }}
        >
          <Button iconPosition={"end"}>Truy xuất</Button>
        </div>
      ),
    },
  ];

  // useEffect(() => {
  //   transactionMutation.mutate(profileStore.profile?.accountDigit);
  // }, [transactionStore.page]);

  return (
    <div className="border p-4">
      <Table
        loading={accountStore.loading}
        columns={columns}
        dataSource={accountStore?.accounts}
        pagination={false}
        scroll={{ y: 300 }}
        bordered
      />

      <div className="pt-3">
        <Pagination
          align="center"
          total={accountStore?.total}
          pageSize={5}
          onChange={(page) => accountStore.setPage(page)}
        />
      </div>
    </div>
  );
}
