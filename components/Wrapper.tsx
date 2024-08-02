"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button, Col, Layout, Row, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import BgBanner from "@/assets/bg_banner.jpg";
import { useRouter } from "next/navigation";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

const queryClient = new QueryClient();

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout className="">
        <Header
          className="!h-auto cursor-pointer sticky top-0 z-10 w-full !bg-white px-5 md:!px-40 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${BgBanner})` }}
        >
          <div className="flex flex-col">
            <Typography.Title
              level={5}
              className="!text-red-600 uppercase !my-3"
              onClick={() => router.push("/")}
            >
              CỔNG THÔNG TIN
            </Typography.Title>

            <div className="w-full flex flex-row h-[40px]">
              <div className="w-5/6 flex flex-row justify-start items-center h-[40px] bg-[#21436b]">
                <div
                  className="!h-full px-6 flex items-center text-white hover:bg-[#246097]"
                  onClick={() => router.push("/")}
                >
                  Trang chủ
                </div>
                <div className="!h-full px-6 flex items-center text-white hover:bg-[#246097]">
                  Giới thiệu KBNN
                </div>
                <div className="!h-full px-6 flex items-center text-white hover:bg-[#246097]">
                  Chiến lược phát triển KBNN
                </div>
              </div>

              <div className="w-1/6 h-[40px] flex justify-end items-center bg-[#246097]">
                <Button
                  icon={<SearchOutlined />}
                  type="text"
                  iconPosition="end"
                  className="!text-white hover:!bg-transparent"
                  onClick={(e) => {
                    e.preventDefault();
                    return router.push("/search");
                  }}
                >
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </Header>

        <Content className="px-5 md:px-40 py-4">
          <div className="min-h-dvh bg-white p-10">
            <Row>
              <Col span={24}>{children}</Col>
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
