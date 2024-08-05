"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Button,
  Col,
  Divider,
  Layout,
  Row,
  Typography,
  Image,
  Dropdown,
  MenuProps,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

const queryClient = new QueryClient();

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      label: <Link href="/">Trang chủ</Link>,
      key: "0",
    },
    {
      label: (
        <Link href="https://vst.mof.gov.vn/webcenter/portal/kbnn/r/m/gtkbnn?_adf.ctrl-state=e6vq8iy3d_1&_afrLoop=47992560973295246#!%40%40%3F_afrLoop%3D47992560973295246%26_adf.ctrl-state%3De6vq8iy3d_5">
          Giới thiệu KBNN
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link href="https://vst.mof.gov.vn/webcenter/portal/kbnn/r/m/clptkbnnn/clptkbnn_chitiet?dDocName=MOF304133&_afrLoop=47992591364717880#!%40%40%3F_afrLoop%3D47992591364717880%26dDocName%3DMOF304133%26_adf.ctrl-state%3De6vq8iy3d_38">
          Chiến lược phát triển KBNN
        </Link>
      ),
      key: "3",
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <Layout className="">
        <Header className="!h-auto cursor-pointer sticky top-0 z-10 !w-full !bg-[#f5f5f5] !px-0 lg:!px-40">
          <div
            className="flex flex-col bg-center bg-cover !bg-no-repeat"
            style={{ backgroundImage: `url(/static/bg_banner.jpg)` }}
          >
            <div className="flex justify-between items-end py-2">
              <div className="flex justify-start items-center">
                <Image src="/static/logo.png" />
                <div>
                  <Typography.Title
                    level={3}
                    className="!text-red-500 !font-medium !text-center lg:!text-left !my-0"
                    onClick={() => router.push("/")}
                  >
                    Bộ tài chính
                  </Typography.Title>
                  <Typography.Title
                    level={4}
                    className="!text-red-500 !font-bold uppercase !text-center lg:!text-left !my-0"
                    onClick={() => router.push("/")}
                  >
                    Kho bạc nhà nước
                  </Typography.Title>
                </div>
              </div>

              <div>
                <Typography.Title
                  level={5}
                  className="!text-black !my-0 px-3"
                  onClick={() => router.push("/")}
                >
                  {new Date().toDateString().split("-").reverse().join("-")}
                </Typography.Title>
              </div>
            </div>

            <div className="!hidden lg:!flex h-[40px] w-full">
              <div className="w-4/5 flex flex-row justify-start items-center h-[40px] bg-[#21436b]">
                <div
                  className="!h-full px-6 flex items-center text-white hover:bg-[#246097]"
                  onClick={() => router.push("/")}
                >
                  Trang chủ
                </div>
                <Divider className="bg-white" type="vertical" />
                <div
                  className="!h-full px-6 flex items-center text-white hover:bg-[#246097]"
                  onClick={() =>
                    router.push(
                      "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/m/gtkbnn?_adf.ctrl-state=e6vq8iy3d_1&_afrLoop=47992560973295246#!%40%40%3F_afrLoop%3D47992560973295246%26_adf.ctrl-state%3De6vq8iy3d_5"
                    )
                  }
                >
                  Giới thiệu KBNN
                </div>
                <Divider className="bg-white" type="vertical" />
                <div
                  className="!h-full px-6 flex items-center text-white hover:bg-[#246097]"
                  onClick={() =>
                    router.push(
                      "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/m/clptkbnnn/clptkbnn_chitiet?dDocName=MOF304133&_afrLoop=47992591364717880#!%40%40%3F_afrLoop%3D47992591364717880%26dDocName%3DMOF304133%26_adf.ctrl-state%3De6vq8iy3d_38"
                    )
                  }
                >
                  Chiến lược phát triển KBNN
                </div>
              </div>

              <div className="w-1/5 h-[40px] flex justify-center items-center bg-[#246097]">
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
                  Tra cứu thông tin tài khoản
                </Button>
              </div>
            </div>

            <div className="!flex lg:!hidden justify-between items-center px-3  h-[40px] w-full bg-[#21436b]">
              <div className="h-[40px] flex items-center">
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Button
                    icon={<MenuOutlined />}
                    onClick={(e) => e.preventDefault()}
                  />
                </Dropdown>
              </div>

              <div className="h-full flex items-center">
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

        <Content className="!px-3 lg:!px-40 py-4">
          <div className="min-h-dvh bg-white !p-0 lg:!p-4">
            <Row>
              <Col span={24}>{children}</Col>
            </Row>
          </div>
        </Content>

        <Footer className="!bg-white w-full !px-3 lg:!px-40">
          <div className="flex justify-center items-center">
            <Typography.Text className="!text-[#246097] font-bold text-center">
              CỔNG THÔNG TIN ĐIỆN TỬ KHO BẠC NHÀ NƯỚC
            </Typography.Text>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center py-3">
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

            <div className="!py-2 lg:!px-2">
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
