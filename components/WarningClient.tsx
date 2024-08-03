"use client";
import { useAccountStore } from "@/stores/account.store";
import { WarningOutlined } from "@ant-design/icons";
import { Typography } from "antd";

export default function WarningClient() {
  const accountStore = useAccountStore((state: any) => state);

  return (
    <div className="py-3 w-full flex flex-col md:flex-row items-center p-4 border rounded-lg bg-red-500">
      <div className="w-full md:w-1/4 lg:w-1/6 text-center text-white font-semibold">
        <div className="flex justify-center items-center">
          <WarningOutlined />
          <Typography.Text className="ml-2 !text-white font-bold">
            Cảnh báo
          </Typography.Text>
        </div>
      </div>
      <div className="w-full md:w-3/4 lg:w-5/6 text-white text-pretty font-bold">
        {accountStore.account?.warning?.content}
      </div>
    </div>
  );
}
