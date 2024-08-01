import { doGet } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format";
import { useQuery } from "@tanstack/react-query";
import { Descriptions } from "antd";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BasicInfor() {
  const param = useParams();
  const [account, setAccount] = useState<any>(null);

  useQuery({
    queryKey: ["get-infor", [param.id]],
    queryFn: async () => {
      const response = await doGet(`/account/${param.id}`);
      if (response?.statusCode === 200) {
        setAccount(response?.data);
        return true;
      }
      return false;
    },
  });

  return (
    <div className="py-3">
      <Descriptions
        title="Thông tin tài khoản"
        column={{ xs: 1, md: 1, lg: 1, xl: 3 }}
      >
        <Descriptions.Item label="Tên chủ TK">
          {account?.accountName}
        </Descriptions.Item>
        <Descriptions.Item label="Số TK">
          {account?.accountDigit}
        </Descriptions.Item>
        <Descriptions.Item label="Ngân hàng">
          {account?.bank?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Số dư TK tạm khoá">
          {formatCurrency(account?.amountLocked)}
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          {account?.status}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
