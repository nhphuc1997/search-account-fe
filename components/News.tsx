import { Divider, Typography, Image } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function News() {
  const router = useRouter();
  const news = [
    {
      title: "Tin thời sự - tổng hợp",
      des: "Bộ Tài chính ban hành Kế hoạch hành động nâng cao chất lượng và hiệu quả cung cấp dịch vụ công trực tuyến của Bộ Tài chính năm 2024",
      img: "/static/thoisu.png",
      time: "16/07/2024",
      more: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/o/ttsk/tth?_afrLoop=47982996940872560&_adf.ctrl-state=ab06t037g_829#!%40%40%3F_afrLoop%3D47982996940872560%26_adf.ctrl-state%3Dab06t037g_833",
    },
    {
      title: "Hoạt động kho bạc nhà nước",
      des: "Kho bạc Nhà nước dâng hương tưởng niệm các Anh hùng liệt sĩ tại Đài tưởng niệm Bắc Sơn, Ba Đình, Hà Nội",
      img: "/static/thoisu2.png",
      time: "19/07/2024",
      more: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/o/ttsk/hdkbnn/hdkbnn_chitiet?dDocName=KBNN216968&_afrLoop=47983010933113808#!%40%40%3F_afrLoop%3D47983010933113808%26dDocName%3DKBNN216968%26_adf.ctrl-state%3Dab06t037g_866",
    },
    {
      title: "Tin Tài chính–Ngân sách",
      des: "Bộ Tài chính Ban hành chương trình hành động thực hiện đề án “Đổi mới quy trình nghiệp vụ ngành Tài chính để thực hiện chuyển đổi số”",
      img: "/static/thoisu3.png",
      time: "08/04/2024",
      more: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/o/ttsk/ttcnh/ttcnh_chitiet?dDocName=KBNN215587&_afrLoop=47983018078214763#!%40%40%3F_afrLoop%3D47983018078214763%26dDocName%3DKBNN215587%26_adf.ctrl-state%3Dab06t037g_899",
    },
    {
      title: "Tin địa phương",
      des: "Kho bạc Nhà nước Quận 1, Thành phố Hồ Chí Minh điểm sáng trong thực hiện tốt các phong trào thi đua phấn đấu hoàn thành xuất sắc nhiệm vụ được giao.",
      img: "/static/thoisu4.png",
      time: "12/03/2024",
      more: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/o/ttsk/tdp/tdp_chitiet?dDocName=KBNN214988&_afrLoop=47983035868498798",
    },
  ];

  return (
    <div>
      {news.map((_new: any, index) => (
        <div
          className="flex justify-center items-start p-2 cursor-pointer"
          key={index}
          onClick={() => router.push(_new.more)}
        >
          <div className="w-1/3 lg:w-1/6">
            <Image src={_new.img} alt="" preview={false} />
          </div>
          <div className="w-2/3 lg:w-5/6">
            <div className="px-2">
              <Divider orientation="left" className="!my-0 !hidden md:!flex">
                <Typography.Paragraph
                  className="block !text-sm font-bold !my-0 !text-[#2673b4] uppercase"
                  ellipsis={{ rows: 2 }}
                >
                  {_new.title}
                </Typography.Paragraph>
              </Divider>

              <Typography.Paragraph
                className="!text-sm font-bold !my-0 !text-[#2673b4] uppercase !flex lg:!hidden"
                ellipsis={{ rows: 2 }}
              >
                {_new.title}
              </Typography.Paragraph>

              <Typography.Paragraph
                className="block !text-xs font-medium !my-0"
                ellipsis={{ rows: 2 }}
              >
                {_new.des}
              </Typography.Paragraph>

              <div className="w-full flex justify-between">
                <Typography.Text className="!text-xs">
                  ({_new.time})
                </Typography.Text>
                <Link href={_new.more} className="!text-xs underline">
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
