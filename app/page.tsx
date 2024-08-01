"use client";
import { Col, Form, Input, Layout, Row, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import FormSearch from "./components/FormSearch";

export default function Home() {
  return (
    <Layout>
      <Header className="sticky top-0 z-10 w-full flex items-center !bg-white">
        <Typography.Text>Tra cứu tài khoản</Typography.Text>
      </Header>

      <Content className="px-5 md:px-40 py-4">
        <div className="min-h-dvh bg-white p-10">
          <Row>
            <Col span={6} />
            <Col xs={24} lg={12}>
              <FormSearch />
            </Col>
            <Col span={6} />
          </Row>
        </div>
      </Content>

      <Footer className="!bg-white flex justify-center items-center">
        2024
      </Footer>
    </Layout>
  );
}
