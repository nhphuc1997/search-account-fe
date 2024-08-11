import { useAccountStore } from "@/stores/account.store";
import { doGet } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format";
import { FileProtectOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Col,
  Pagination,
  Row,
  Table,
  TableProps,
  Tag,
  Typography,
} from "antd";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function AbsNormalTransactions() {
  const param = useParams();
  const router = useRouter();
  const accountStore = useAccountStore((state: any) => state);

  const [transactions, setTransactions] = useState<any>([]);
  const [transactionsTotal, setTransactionsTotal] = useState<number>(0);
  const [transactionsPage, setTransactionsPage] = useState<number>(1);
  const [tranLoading, setTranLoading] = useState<boolean>(false);

  useQuery({
    queryKey: [
      "get-transaction",
      [accountStore.accountStore?.transactionGroupId, transactionsPage],
    ],
    queryFn: async () => {
      setTranLoading(true);
      const $filter = {
        transactionGroupId: accountStore.accountStore?.transactionGroupId,
      };
      const _params = {
        s: JSON.stringify($filter),
        limit: 10,
        page: transactionsPage,
      };
      const response = await doGet("/transaction-history", _params);
      if (response?.statusCode === 200) {
        setTransactions(response?.data?.data);
        setTransactionsTotal(response?.data?.total);
        setTransactionsPage(response?.data?.page);
        setTranLoading(false);
        return true;
      }
      setTranLoading(false);
      return false;
    },
  });

  const getTagColor = (status: string) => {
    return {
      "Bảo lưu": "red",
      "Đang xử lý": "orange",
      "Đã giải ngân": "green",
    }[status];
  };

  const columns: TableProps["columns"] = [
    {
      title: "Tên tài khoản",
      dataIndex: "senderAccountName",
      key: "senderAccountName",
    },
    {
      title: "Số tài khoản",
      dataIndex: "senderAccountNumber",
      key: "senderAccountNumber",
    },
    {
      title: "Ngân hàng",
      key: "senderBank",
      render(value, record, index) {
        return value?.senderBank?.name;
      },
    },
    {
      title: "Số tiền",
      key: "amount",
      dataIndex: "amount",
      render(value, record, index) {
        return formatCurrency(value);
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "",
      key: "",
      align: "center",
      render(value, record, index) {
        return (
          <Tag color={`${getTagColor(value?.transactionStatus?.name)}`}>
            {value?.transactionStatus?.name}
          </Tag>
        );
      },
    },
  ];

  return (
    <div className="py-3">
      <Row>
        <Col xs={24} md={12}>
          <Typography.Title level={5} className="text-center md:text-left">
            Các giao dịch bất thường
          </Typography.Title>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className="py-3">
            <Table
              loading={tranLoading}
              pagination={false}
              columns={columns}
              dataSource={transactions}
              bordered
              scroll={{ x: 800, y: 500 }}
            />
          </div>

          <div className="py-3">
            <Pagination
              align="center"
              defaultCurrent={transactionsPage}
              total={transactionsTotal}
              pageSize={10}
              onChange={(page) => setTransactionsPage(page)}
            />
          </div>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <div className="flex justify-end  items-center">
            <Button
              className="!bg-[#246097]"
              type="primary"
              icon={<FileProtectOutlined />}
              iconPosition="end"
              onClick={() => {
                router.push(`/verify/${param.id}`);
              }}
            >
              Xác minh giao dịch
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
