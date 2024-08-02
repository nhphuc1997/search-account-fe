"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Col, Layout, Row, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import BgBanner from "@/assets/bg_banner.jpg";
import { useRouter } from "next/navigation";

const queryClient = new QueryClient();

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout className="">
        <Header
          className="cursor-pointer sticky top-0 z-10 w-full flex items-center !bg-white px-5 md:!px-40 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${BgBanner})` }}
          onClick={() => router.push("/")}
        >
          <Typography.Title level={5} className="!text-red-600 uppercase !my-0">
            CỔNG THÔNG TIN
          </Typography.Title>
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
