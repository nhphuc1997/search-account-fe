import { useAccountStore } from "@/stores/account.store";
import { Button, Pagination, Table, TableColumnsType, Tag } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

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
    render: () => (
      <div className="flex justify-center items-center">
        <Button iconPosition={"end"}>Truy xuất</Button>
      </div>
    ),
  },
];

export default function Accounts() {
  const accountStore = useAccountStore((state: any) => state);

  return (
    <div className="border p-4">
      <Table
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
