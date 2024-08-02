import { Carousel, Col, Divider, Row, Typography } from "antd";
import Articles from "./Article";

export default function TopNews() {
  const images = [
    "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216944&dID=229494&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
    "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216961&dID=229513&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
    "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216944&dID=229494&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
  ];

  return (
    <Row gutter={8}>
      <Col xs={24} md={20}>
        <div className="w-full">
          <Row className="">
            <Col xs={24} md={12}>
              <Carousel effect="fade" dots={false} autoplay>
                {images.map((item) => (
                  <div className="">
                    <div
                      className="h-[340px] w-full bg-transparent bg-center bg-cover bg-no-repeat"
                      style={{ backgroundImage: `url(${item})` }}
                    />
                    <div className="mt-[-120px] bg-[#e9f0f6] opacity-75 px-2">
                      <Typography.Text className="text-base font-bold !text-[#2c6ea8]">
                        Kho bạc Nhà nước họp báo công bố kết quả thực hiện nhiệm
                        vụ trọng tâm trong 6 tháng đầu năm 2024
                        <Typography.Text className="mx-2 text-xs font-normal !text-[#2c6ea8]">
                          (18/07/2024)
                        </Typography.Text>
                      </Typography.Text>

                      <Typography.Paragraph className="!my-0 text-sm font-normal text-pretty">
                        Chiều ngày 18/7/2024, tại trụ sở Kho bạc Nhà nước
                        (KBNN), tổ chức họp báo về “Kết quả công tác trọng tâm 6
                        tháng đầu năm 2024 của hệ thống KBNN”. Bà Trần...
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
