"use client";
import Articles from "@/components/Article";
import { Carousel, Col, Image, Row, Typography } from "antd";

export default function IndexHomePage() {
  const images = [
    "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216944&dID=229494&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
    "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216961&dID=229513&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
    "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216944&dID=229494&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
  ];

  return (
    <div className="w-full">
      <Row gutter={16}>
        <Col xs={24} md={20}>
          <div className="w-full">
            <Row>
              <Col xs={24} md={12}>
                <Carousel effect="fade" dots={false} autoplay>
                  {images.map((item) => (
                    <div>
                      <div
                        className="h-[300px] w-full bg-transparent bg-center bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url(${item})` }}
                      />
                      <div className="mt-[-120px] bg-[#e9f0f6] opacity-75">
                        <Typography.Text className="text-base font-bold !text-[#2c6ea8]">
                          Kho bạc Nhà nước họp báo công bố kết quả thực hiện
                          nhiệm vụ trọng tâm trong 6 tháng đầu năm 2024
                          <Typography.Text className="mx-2 text-xs font-normal !text-[#2c6ea8]">
                            (18/07/2024)
                          </Typography.Text>
                        </Typography.Text>

                        <Typography.Paragraph className="!my-0 text-sm font-normal text-pretty">
                          Chiều ngày 18/7/2024, tại trụ sở Kho bạc Nhà nước
                          (KBNN), tổ chức họp báo về “Kết quả công tác trọng tâm
                          6 tháng đầu năm 2024 của hệ thống KBNN”. Bà Trần...
                        </Typography.Paragraph>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </Col>
              <Col xs={24} md={12}>
                <div className="h-[300px] overflow-hidden">
                  <div className="bg-[#2573B5] p-1">
                    <Typography.Text className="text-sm font-medium !text-white uppercase">
                      Tin nổi bật
                    </Typography.Text>
                  </div>

                  <div className="h-[300px] overflow-y-auto">
                    <Articles />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} md={4}>
          2
        </Col>
      </Row>
    </div>
  );
}
