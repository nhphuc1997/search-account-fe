import { useAccountStore } from "@/stores/account.store";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Row, Table, TableProps, Tag, Typography } from "antd";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default function TableAccount() {
  const accountStore = useAccountStore((state: any) => state);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Tên TK",
      dataIndex: "accountName",
      key: "accountName",
    },
    {
      title: "Số TK",
      dataIndex: "accountDigit",
      key: "accountDigit",
      align: "left",
    },
    {
      title: "SĐT",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Số căn cước",
      dataIndex: "idCard",
      key: "idCard",
    },
    {
      title: "Ngân hàng",
      key: "bank",
      align: "center",
      render(value, record, index) {
        return <Tag color="blue">{value?.bank?.name}</Tag>;
      },
    },
    {
      title: "",
      align: "center",
      render() {
        return (
          <Button icon={<SearchOutlined />} iconPosition="end">
            Truy xuất
          </Button>
        );
      },
    },
  ];

  console.log(accountStore.accounts, "accountStore");

  return (
    <div className="py-3">
      <Row>
        <Col span={18}>
          <Typography.Title level={5}>Danh sách tài khoản</Typography.Title>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className="py-3">
            <Table
              loading={accountStore.loading}
              pagination={false}
              columns={columns}
              dataSource={accountStore.accounts}
              bordered
              scroll={{ x: 800, y: 800 }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
