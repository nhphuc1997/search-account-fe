"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Col, Layout, Row, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

const queryClient = new QueryClient();

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header className="sticky top-0 z-10 w-full flex items-center !bg-white">
          <Typography.Text>Tra cứu tài khoản</Typography.Text>
        </Header>

        <Content className="px-5 md:px-40 py-4">
          <div className="min-h-dvh bg-white p-10">
            <Row>
              <Col span={2} />
              <Col xs={24} lg={20}>
                {children}
              </Col>
              <Col span={2} />
            </Row>
          </div>
        </Content>

        <Footer className="!bg-white flex justify-center items-center">
          2024
        </Footer>
      </Layout>
    </QueryClientProvider>
  );
}
