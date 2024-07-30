"use client";
import {
  Layout,
  Typography,
  Tabs,
  Row,
  Col,
  Descriptions,
  Divider,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import FormSearch from "./components/FormSearch";
import Accounts from "./components/Accounts";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <Layout>
      <Header className="sticky top-0 z-10 w-full flex items-center !bg-white">
        <Typography.Text>Tra cứu tài khoản</Typography.Text>
      </Header>

      <Content className="px-5 md:px-40 py-4">
        <div className="min-h-dvh p-4 bg-white">
          <Row>
            <Col xs={24} lg={12}>
              <FormSearch />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Divider orientation="left">Danh sách tài khoản</Divider>
            </Col>

            <Col span={24}>
              <Accounts />
            </Col>
          </Row>

          <Row className="pt-6">
            <Col span={24}>
              <Divider orientation="left">Thông tin hồ sơ</Divider>
            </Col>

            <Col span={24}>
              <Profile />
            </Col>
          </Row>
        </div>
      </Content>

      <Footer className="!bg-white flex justify-center items-center">
        2024
      </Footer>
    </Layout>
  );
}
