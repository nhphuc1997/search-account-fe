import { useProfileStore } from "@/stores/profile.store";
import { useTransactionsStore } from "@/stores/transaction.store";
import { doGet } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format";
import { useMutation } from "@tanstack/react-query";
import {
  Col,
  Descriptions,
  Pagination,
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
    title: "Tên tài khoản",
    render: (data) => {
      return (
        <div>
          <Typography.Text>{data?.senderAccount?.accountName}</Typography.Text>
        </div>
      );
    },
  },
  {
    title: "Số tài khoản",
    render: (data) => {
      return (
        <div>
          <Typography.Text>{data?.senderAccount?.accountDigit}</Typography.Text>
        </div>
      );
    },
  },
  {
    title: "Số tiền giao dịch",
    dataIndex: "amount",
    align: "center",
    render: (data) => {
      return <Typography.Text>{formatCurrency(data)}</Typography.Text>;
    },
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
    align: "center",
    render: (data) => {
      if (data === "Bảo lưu") {
        return <Tag color="lime">{data}</Tag>;
      }
      if (data === "Đang xử lí") {
        return <Tag color="gold">{data}</Tag>;
      }
      return <Tag color="success">{data}</Tag>;
    },
  },
];

export default function Profile() {
  const profileStore = useProfileStore((state: any) => state);
  const transactionStore = useTransactionsStore((state: any) => state);

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
            <Tag color="blue">{profileStore.profile?.accountDigit}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Chủ tài khoản">
            <Tag color="blue">{profileStore.profile?.accountName}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Ngân hàng">
            <Tag color="blue">{profileStore.profile?.bank?.name}</Tag>
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className="py-3 w-full">
        <Row gutter={8}>
          <Col xs={24} xl={18} className="">
            <Typography.Paragraph className="!my-0 p-4 border h-[80px]">
              Số dư của các tài khoản trên bảng tra cứu có thể chênh lệch với số
              tiền thực tế mà các tài khoản đã thực hiện với tài khoản đang khoá
            </Typography.Paragraph>
          </Col>
          <Col xs={24} xl={6}>
            <div className="p-4 border h-[80px] flex flex-col justify-center items-center">
              <Typography.Paragraph className="!my-1">
                Số dư tạm khoá
              </Typography.Paragraph>
              <Typography.Title level={5} className="!my-1">
                {formatCurrency(profileStore.profile?.amountLocked)}
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
          loading={transactionStore.loading}
          columns={columns}
          dataSource={transactionStore.transactions?.data}
          pagination={false}
          scroll={{ y: 300, x: 800 }}
          bordered
        />

        <div className="pt-3">
          <Pagination
            align="center"
            total={transactionStore?.total}
            pageSize={5}
            onChange={(page) => transactionStore.setPage(page)}
          />
        </div>
      </div>
    </div>
  );
}
