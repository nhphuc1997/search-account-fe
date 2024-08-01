import { doGet } from "@/utils/doMethod";
import { WarningOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Typography } from "antd";
import { useState } from "react";

export default function WarningClient() {
  const [warningContent, setwarningContent] = useState<any>(null);

  useQuery({
    queryKey: ["get-warning"],
    queryFn: async () => {
      const response = await doGet("/warning", {
        sort: "id,DESC",
        limit: 1,
        page: 1,
      });
      if (response?.statusCode === 200) {
        setwarningContent(response?.data?.data[0]?.content);
        return true;
      }
      return false;
    },
  });

  return (
    <div className="py-3 w-full flex flex-col md:flex-row items-center p-4 border rounded-lg bg-red-500">
      <div className="w-full md:w-1/4 lg:w-1/6 text-center text-white font-semibold">
        <div className="flex justify-center items-center">
          <WarningOutlined />
          <Typography.Text className="ml-2 !text-white">
            Cảnh báo
          </Typography.Text>
        </div>
      </div>
      <div className="w-full md:w-3/4 lg:w-5/6 text-white text-pretty">
        {warningContent}
      </div>
    </div>
  );
}
