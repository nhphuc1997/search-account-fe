"use client";
import { FileProtectOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Descriptions,
  Form,
  Input,
  Modal,
  Pagination,
  Row,
  Space,
  Table,
  TableProps,
  Typography,
} from "antd";
import { useRef, useState } from "react";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default function SearchPage() {
  const [confirmTransaction, setConfirmTransaction] = useState<boolean>(false);
  const submitBtn = useRef<any>(null);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => "aaaa",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Space size="middle">aaaaa</Space>,
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
  ];

  return (
    <div>
      <div className="py-3">
        <Descriptions
          title="Thông tin tài khoản"
          column={{ xs: 1, md: 1, lg: 3 }}
        >
          <Descriptions.Item label="Tên chủ TK">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Số TK">1810000000</Descriptions.Item>
          <Descriptions.Item label="Ngân hàng">Hangzhou</Descriptions.Item>
          <Descriptions.Item label="Số dư TK">empty</Descriptions.Item>
          <Descriptions.Item label="Trạng thái">empty</Descriptions.Item>
        </Descriptions>
      </div>

      <div className="py-3">
        <div className="p-4 border ">
          <Typography.Text className="!mb-0 white">
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development
          </Typography.Text>
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
              onClick={() => setConfirmTransaction(true)}
            >
              Xác minh giao dịch
            </Button>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div className="py-3">
              <Table
                pagination={false}
                columns={columns}
                dataSource={data}
                bordered
                scroll={{ x: 800, y: 500 }}
              />
            </div>

            <div className="py-3">
              <Pagination
                align="center"
                defaultCurrent={1}
                total={50}
                pageSize={10}
              />
            </div>
          </Col>
        </Row>

        <Modal
          title="Xác minh giao dịch"
          open={confirmTransaction}
          onCancel={() => setConfirmTransaction(false)}
          footer={[
            <Button onClick={() => setConfirmTransaction(false)}>Huỷ</Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => submitBtn?.current?.click()}
            >
              Hoàn tất
            </Button>,
          ]}
        >
          <div className="py-3">
            <Form autoComplete="off">
              <Form.Item
                name="username"
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
        </Modal>
      </div>
    </div>
  );
}
