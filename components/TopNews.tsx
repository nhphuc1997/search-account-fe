import { Carousel, Col, Divider, Row, Typography } from "antd";
import Articles from "./Article";
import { useRouter } from "next/navigation";

export default function TopNews() {
  const router = useRouter();
  const images = [
    {
      image:
        "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216944&dID=229494&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
      title:
        "Thắt chặt hữu nghị, tăng cường hợp tác toàn diện về tài chính giữa Việt Nam và Australia",
      des: "Sáng ngày 30/7/2024, tại trụ sở Bộ Tài chính, Thứ trưởng Bộ Tài chính Bùi Văn Khắng đã chủ trì buổi làm việc với đoàn công tác của Quỹ Tiền tệ quốc tế... ",
      time: "18/07/2024",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/lm/htqt/htqt_chitiet?dDocName=KBNN216987&_afrLoop=47993057379844136",
    },
    {
      image:
        "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216969&dID=229521&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
      title:
        "Kho bạc Nhà nước dâng hương tưởng niệm các Anh hùng liệt sĩ tại Đài tưởng niệm Bắc Sơn, Ba Đình, Hà Nội",
      des: "Nhân dịp kỷ niệm 77 năm ngày Thương binh – Liệt sĩ (27.7.1947 – 27.7.2024), sáng ngày 26/7/2024, Đoàn đại biểu Kho bạc Nhà nước (KBNN) ... ",
      time: "18/07/2024",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/o/ttsk/hdkbnn/hdkbnn_chitiet?dDocName=KBNN216968&_afrLoop=47993232557872466",
    },
  ];

  return (
    <Row gutter={8}>
      <Col xs={24} md={20}>
        <div className="w-full">
          <Row className="">
            <Col xs={24} md={12}>
              <Carousel effect="fade" dots={false} autoplay>
                {images.map((item, index) => (
                  <div
                    className="cursor-pointer"
                    key={index}
                    onClick={() => router.push(item.url)}
                  >
                    <div
                      className="h-[340px] w-full bg-transparent bg-center bg-cover bg-no-repeat"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="mt-[-120px] bg-[#e9f0f6] opacity-75 px-2">
                      <Typography.Text className="text-base font-bold !text-[#2c6ea8]">
                        {item.title}

                        <Typography.Text className="mx-2 text-xs font-normal !text-[#2c6ea8]">
                          {item.time}
                        </Typography.Text>
                      </Typography.Text>

                      <Typography.Paragraph className="!my-0 text-sm font-normal text-pretty">
                        {item.des}
                      </Typography.Paragraph>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Col>
            <Col xs={24} md={12}>
              <div className="">
                <div className="bg-[#2573B5] px-3 py-1">
                  <Typography.Text className="text-sm font-medium !text-white uppercase">
                    Tin nổi bật
                  </Typography.Text>
                </div>

                <div className="h-[300px] overflow-y-auto bg-[#f2f7fa]">
                  <Articles />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col xs={24} md={4}>
        <div className="h-[160px] overflow-y-auto bg-[#f2f7fa]">
          <div className="bg-[#2573B5] px-3 py-1">
            <Typography.Text className="text-sm font-medium !text-white uppercase">
              Thông báo
            </Typography.Text>
          </div>

          <div className="p-2">
            <ul className="!list-disc">
              <li className="pb-2">
                <a href="" className="text-xs">
                  Tỷ giá hạch toán ngoại tệ tháng 08/2024
                </a>
              </li>
              <li className="pb-2">
                <a href="" className="text-xs">
                  Ban Quản lý dự án đầu tư hệ thống mạng Lan cơ quan KBNN đề
                  nghị cung cấp hồ sơ năng lực và báo giá(30/07/2024)
                </a>
              </li>
              <li className="pb-2">
                <a href="" className="text-xs">
                  KBNN Quãng Ngãi thông báo xét tuyển hợp đồng lao động năm
                  2024(31/07/2024)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="!my-1" />

        <div className="h-[160px] overflow-y-auto bg-[#f2f7fa]">
          <div className="bg-[#2573B5] px-3 py-1">
            <Typography.Text className="text-sm font-medium !text-white uppercase">
              Văn bản mới
            </Typography.Text>
          </div>

          <div className="p-2">
            <ul className="!list-disc">
              <li className="pb-2">
                <a
                  className="text-xs"
                  href="https://vst.mof.gov.vn/webcenter/portal/kbnn/r/m/htvb/ct_vbm?id=8037&_adf.ctrl-state=ab06t037g_1&_afrLoop=47978032979645810#!%40%40%3F_afrLoop%3D47978032979645810%26id%3D8037%26_adf.ctrl-state%3Dab06t037g_5"
                >
                  V/v Báo cáo tình hình thực hiện công khai dự toán
                  2023(28/04/2023)
                </a>
              </li>
              <li className="pb-2">
                <a className="text-xs" href="">
                  Vv phân công thực hiện các nhiệm vụ, đề án triển khai Chương
                  trình hành động của Bộ Tài chính ...(01/12/2022)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
}
