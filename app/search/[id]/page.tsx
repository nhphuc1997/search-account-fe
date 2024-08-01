"use client";
import { doGet, doPost } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format";
import { FileProtectOutlined, WarningOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Button,
  Col,
  Descriptions,
  Form,
  Input,
  Modal,
  notification,
  Pagination,
  Row,
  Table,
  TableProps,
  Tag,
  Typography,
} from "antd";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function SearchPage() {
  const param = useParams();
  const router = useRouter();

  const [account, setAccount] = useState<any>(null);
  const [transactions, setTransactions] = useState<any>([]);
  const [transactionsTotal, setTransactionsTotal] = useState<number>(0);
  const [transactionsPage, setTransactionsPage] = useState<number>(1);
  const [tranLoading, setTranLoading] = useState<boolean>(false);
  const [warningContent, setwarningContent] = useState<any>(null);

  useQuery({
    queryKey: ["get-infor", [param.id]],
    queryFn: async () => {
      const response = await doGet(`/account/${param.id}`);
      if (response?.statusCode === 200) {
        setAccount(response?.data);
        return true;
      }
      return false;
    },
  });

  useQuery({
    queryKey: ["get-transaction", [param.id, transactionsPage]],
    queryFn: async () => {
      setTranLoading(true);
      const $filter = {
        retrieverAccountId: param.id,
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

  useQuery({
    queryKey: ["get-warning"],
    queryFn: async () => {
      const response = await doGet("/warning", {
        sort: "id,DESC",
        limit: 1,
        page: 1,
      });
      if (response?.statusCode === 200) {
        setwarningContent(response?.data?.data[0]?.content);
        return;
      }
    },
  });

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
      dataIndex: "status",
      key: "status",
      align: "center",
      render(value, record, index) {
        return <Tag color={`${getTagColor(value)}`}>{value}</Tag>;
      },
    },
  ];

  const getTagColor = (status: string) => {
    return {
      "Bảo lưu": "red",
      "Đang xử lí": "orange",
      "Đã giải ngân": "green",
    }[status];
  };

  return (
    <div>
      <div className="py-3">
        <Descriptions
          title="Thông tin tài khoản"
          column={{ xs: 1, md: 1, lg: 1, xl: 3 }}
        >
          <Descriptions.Item label="Tên chủ TK">
            {account?.accountName}
          </Descriptions.Item>
          <Descriptions.Item label="Số TK">
            {account?.accountDigit}
          </Descriptions.Item>
          <Descriptions.Item label="Ngân hàng">
            {account?.bank?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Số dư TK tạm khoá">
            {formatCurrency(account?.amountLocked)}
          </Descriptions.Item>
          <Descriptions.Item label="Trạng thái">
            {account?.status}
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className="py-3 w-full flex flex-col md:flex-row items-center p-4 border rounded-lg bg-red-500">
        <div className="w-full md:w-1/4 lg:w-1/6 text-center text-white font-semibold">
          <div className="flex justify-center items-center">
            <WarningOutlined />
            <Typography.Text className="ml-2 !text-white">
              Cảnh báo
            </Typography.Text>
          </div>
        </div>
        <div className="w-full md:w-3/4 lg:w-5/6 text-white text-pretty">
          {warningContent}
        </div>
      </div>

      <div className="py-3">
        <Row>
          <Col span={18}>
            <Typography.Title level={5}>
              Thông tin các giao dịch bất thường
            </Typography.Title>
          </Col>
          <Col span={6}>
            <Button
              block
              type="primary"
              icon={<FileProtectOutlined />}
              iconPosition="end"
              onClick={() => {
                router.push(`verify/${param.id}`);
              }}
            >
              Xác minh giao dịch
            </Button>
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

        {/* <Modal
          title="Xác minh giao dịch"
          open={modalVerifyCode}
          onCancel={() => setModalVerifyCode(false)}
          footer={[
            <Button
              key="submit"
              type="primary"
              onClick={() => submitBtn?.current?.click()}
              loading={verifyLoading}
            >
              Hoàn tất
            </Button>,
          ]}
        >
          <div className="py-3">
            <Form
              form={formVerifyCode}
              autoComplete="off"
              onFinish={onFinishVerifyCode}
            >
              <Form.Item
                name="code"
                rules={[
                  { required: true, message: "Vui lòng nhập mã xác minh" },
                ]}
              >
                <Input />
              </Form.Item>

              <Button
                ref={submitBtn}
                type="primary"
                htmlType="submit"
                className="!hidden"
              />
            </Form>
          </div>
        </Modal> */}
      </div>
    </div>
  );
}
