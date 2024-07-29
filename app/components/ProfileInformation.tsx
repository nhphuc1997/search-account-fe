"use client";
import { useQueries, useQuery } from "@tanstack/react-query";
import {
  Button,
  Col,
  Divider,
  Form,
  FormProps,
  Input,
  Pagination,
  Row,
  Select,
  Table,
  TableProps,
  Typography,
} from "antd";
import { useEffect, useState } from "react";

type FieldType = {
  accountNumber?: string;
  accountName?: string;
  bank?: string;
};

const messageRequire = "Đây là trường bắt buộc";
const columns: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "id",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Tên tài khoản",
    dataIndex: "accountName",
  },
  {
    title: "Số tài khoản",
    dataIndex: "accountNumber",
  },
  {
    title: "Ngân hàng",
    dataIndex: "bank",
  },
  {
    title: "Số tiền giao dịch",
    dataIndex: "amount",
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park",
  },
];

export function ProfileInformation() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const [banks, setBanks] = useState<any[]>([]);
  const [banksFilter, setBanksFilter] = useState<string | null>(null);

  useQuery({
    queryKey: ["get-banks"],
    queryFn: async () => {
      await fetch("http://localhost:3001/bank")
        .then((response) => response.json())
        .then((jsonData) => {
          if (jsonData?.statusCode === 200) {
            const optionsBank = jsonData?.data?.map((item: any) => ({
              value: item.name,
              label: item.name,
            }));
            setBanks(optionsBank);
          }
        });

      return;
    },
  });

  const onChangeBankFilter = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div>
        <Divider orientation="left" className="!text-sm !font-normal !my-3">
          Thông tin tài khoản kiểm soát
        </Divider>
      </div>

      <Row>
        <Col xs={24} md={18}>
          <Form
            name="horizontal_login"
            layout="inline"
            onFinish={onFinish}
            className="w-full flex flex-col md:flex-row"
          >
            <Form.Item
              label="Số TK"
              name="accountNumber"
              rules={[{ required: true, message: messageRequire }]}
              className="!my-2 !w-full md:!w-1/4"
            >
              <Input
                type="text"
                placeholder="012301230123"
                onChange={(e: any) => console.log(e?.target?.value)}
              />
            </Form.Item>

            <Form.Item
              label="Chủ TK"
              name="accountName"
              rules={[{ required: true, message: messageRequire }]}
              className="!my-2 !w-full md:!w-1/4"
            >
              <Input
                type="text"
                placeholder="CTY TNHH QK IMB"
                onChange={(e: any) => console.log(e?.target?.value)}
              />
            </Form.Item>

            <Form.Item
              label="Ngân hàng"
              name="bank"
              rules={[{ required: true, message: messageRequire }]}
              className="!my-2 !w-full md:!w-1/4"
            >
              <Select
                showSearch
                placeholder="MBBank"
                optionFilterProp="label"
                options={banks}
                onChange={(e: any) => console.log(e)}
                className="!w-full"
              />
            </Form.Item>

            {/* <Form.Item className="!my-2">
              <Button type="primary" htmlType="submit">
                Trích xuât
              </Button>
            </Form.Item> */}
          </Form>
        </Col>
      </Row>

      <Row className="py-3" gutter={8}>
        <Col xs={24} md={18}>
          <div className="p-2 border rounded-lg h-[62px]">
            <Typography.Paragraph className="!mb-0 text-base font-medium">
              Số dư bảo lưu của tài khoản hiển thị trên bảng tra cứu có thể
              chênh lệch với số tiền thực tế mà các tài khoản đã thực hiện giao
              dịch với tài khoản bị khoá
            </Typography.Paragraph>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <div className="p-2 border rounded-lg h-[62px]">
            <Typography.Paragraph className="!my-0 flex justify-center items-center">
              Số dư tạm khoá:
            </Typography.Paragraph>
            <Typography.Title
              level={5}
              className="!my-0 flex justify-center items-center"
            >
              97899999 vnd
            </Typography.Title>
          </div>
        </Col>
      </Row>

      <div className="py-3">
        <Typography.Paragraph className="!mb-0 text-base font-medium">
          Danh sách tài khoản phát sinh giao dịch liên quan
        </Typography.Paragraph>
      </div>

      <div className="py-3">
        <Table
          pagination={false}
          columns={columns}
          dataSource={data}
          bordered
        />

        <div className="py-3 flex justify-center items-center">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}
