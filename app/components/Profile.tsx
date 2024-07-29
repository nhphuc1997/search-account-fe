import {
  Col,
  Descriptions,
  Row,
  Table,
  TableColumnsType,
  Tag,
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
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default function Profile() {
  return (
    <div className="p-4 border">
      <div className="py-3">
        <Typography.Paragraph className="!my-0">
          Thông tin tài khoản kiểm soát
        </Typography.Paragraph>
      </div>

      <div className="py-3">
        <Descriptions title="">
          <Descriptions.Item label="Số tài khoản">
            <Tag color="blue">1900876547890</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Chủ tài khoản">
            <Tag color="blue">CTY TNHH</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Ngân hàng">
            <Tag color="blue">MSB</Tag>
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className="py-3 w-full">
        <Row gutter={8}>
          <Col xs={24} md={18}>
            <Typography.Paragraph className="!my-0 p-4 border h-[80px]">
              Số dư của các tài khoản trên bảng tra cứu có thể chênh lệch với số
              tiền thực tế mà các tài khoản đã thực hiện với tài khoản đang khoá
            </Typography.Paragraph>
          </Col>
          <Col xs={24} md={6}>
            <div className="p-4 border h-[80px] flex flex-col justify-center items-center">
              <Typography.Paragraph className="!my-1">
                Số dư tạm khoá
              </Typography.Paragraph>
              <Typography.Title level={5} className="!my-1">
                90000000 vnd
              </Typography.Title>
            </div>
          </Col>
        </Row>
      </div>

      <Typography.Paragraph className="!my-0 py-3" type="warning">
        Danh sách tài khoản phát sinh giao dịch liên quan
      </Typography.Paragraph>

      <div className="py-3">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ y: 300 }}
          bordered
        />
      </div>
    </div>
  );
}
