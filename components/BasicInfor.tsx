import { useAccountStore } from "@/stores/account.store";
import { doGet } from "@/utils/doMethod";
import { formatCurrency } from "@/utils/format";
import { useQuery } from "@tanstack/react-query";
import { Descriptions, Typography } from "antd";
import { useParams } from "next/navigation";

export default function BasicInfor() {
  const param = useParams();
  const accountStore = useAccountStore((state: any) => state);

  useQuery({
    queryKey: ["get-account", [param.id]],
    queryFn: async () => {
      const response = await doGet(`/account/${param.id}`);
      if (response?.statusCode === 200) {
        accountStore.setAccount(response?.data);
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
          <Typography.Text className="font-medium">
            {accountStore.account.accountName}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item label="Số TK">
          <Typography.Text className="font-medium">
            {accountStore.account.accountDigit}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item label="Ngân hàng">
          <Typography.Text className="font-medium">
            {accountStore.account.bank?.name}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item label="Số dư TK tạm khoá">
          <Typography.Text className="font-medium">
            {formatCurrency(accountStore.account.amountLocked)}
          </Typography.Text>
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          <Typography.Text className="font-medium">
            {accountStore.account.status}
          </Typography.Text>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
