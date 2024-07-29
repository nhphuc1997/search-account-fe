"use client";
import { Layout, Typography, Tabs } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ProfileInformation } from "./components/ProfileInformation";

export default function Home() {
  return (
    <Layout>
      <Header className="sticky top-0 z-10 w-full flex items-center !bg-white">
        <Typography.Text>Tìm kiếm tài khoản</Typography.Text>
      </Header>
      <Content className="px-[50px] pt-8">
        <div className="min-h-dvh p-4 bg-white rounded-lg">
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: "Thông tin hồ sơ",
                key: "1",
                children: <ProfileInformation />,
              },
            ]}
          />
        </div>
      </Content>
    </Layout>
  );
}
