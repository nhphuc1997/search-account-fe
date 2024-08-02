"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Button, Col, Divider, Layout, Row, Typography, Image } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import { SearchOutlined } from "@ant-design/icons";

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
          style={{ backgroundImage: `url(/static/bg_banner.jpg)` }}
        >
          <div className="flex flex-col">
            <Typography.Title
              level={5}
              className="!text-red-600 !font-extrabold uppercase !my-3"
              onClick={() => router.push("/")}
            >
              CỔNG THÔNG TIN ĐIỆN TỬ KHO BẠC NHÀ NƯỚC
            </Typography.Title>

            <div className="w-full flex flex-row h-[40px]">
              <div className="w-5/6 flex flex-row justify-start items-center h-[40px] bg-[#21436b]">
                <div
                  className="!h-full px-6 flex items-center text-white hover:bg-[#246097]"
                  onClick={() => router.push("/")}
                >
                  Trang chủ
                </div>
                <Divider className="bg-white" type="vertical" />
                <div className="!h-full px-6 flex items-center text-white hover:bg-[#246097]">
                  Giới thiệu KBNN
                </div>
                <Divider className="bg-white" type="vertical" />
                <div className="!h-full px-6 flex items-center text-white hover:bg-[#246097]">
                  Chiến lược phát triển KBNN
                </div>
              </div>

              <div className="w-1/6 h-[40px] flex justify-center items-center bg-[#246097]">
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

        <Footer className="!bg-white w-full">
          <div className="flex justify-center items-center">
            <Typography.Text className="!text-[#246097] font-bold">
              CỔNG THÔNG TIN ĐIỆN TỬ KHO BẠC NHÀ NƯỚC
            </Typography.Text>
          </div>

          <div className="flex justify-between items-center py-3">
            <div>
              <Typography.Paragraph className="!my-1">
                Giấy phép số 173/GP-TTĐT ngày 15/12/2022
              </Typography.Paragraph>
              <Typography.Paragraph className="!my-1">
                Người chịu trách nhiệm: Bà Trần Thị Huệ
              </Typography.Paragraph>
              <Typography.Paragraph className="!my-1">
                Phó Tổng Giám đốc Kho bạc Nhà nước – Trưởng Ban biên tập
              </Typography.Paragraph>
            </div>

            <div>
              <Image alt="" src="/static/handle_cert.png" preview={false} />
            </div>

            <div>
              <Typography.Paragraph className="!my-1">
                Số 32 Cát Linh - Đống Đa - Hà Nội
              </Typography.Paragraph>
              <Typography.Paragraph className="!my-1">
                Tel: (84-24) 62 764 300 Fax: (84-24) 62 764 367
              </Typography.Paragraph>
              <Typography.Paragraph className="!my-1">
                Email: congttdtkbnn@vst.gov.vn
              </Typography.Paragraph>
            </div>
          </div>
        </Footer>
      </Layout>
    </QueryClientProvider>
  );
}
