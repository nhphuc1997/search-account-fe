import {
  Button,
  Descriptions,
  Divider,
  Pagination,
  Table,
  TableColumnsType,
  Typography,
} from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "SĐT",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "CCCD/CMT",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Tên tài khoản",
    dataIndex: "address",
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

const data: DataType[] = [];
for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default function Accounts() {
  return (
    <div className="border p-4">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 300 }}
        bordered
      />

      <div className="pt-3">
        <Pagination align="center" defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}
