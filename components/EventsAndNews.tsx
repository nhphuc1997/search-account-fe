import { Col, Row, Typography } from "antd";
import Image from "next/image";
import News from "./News";

export default function MainNews() {
  const listMenu = [
    {
      name: "Chuyển đổi Kho bạc số",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/lm/dvc-cds?_afrLoop=47981245224643654&_adf.ctrl-state=ab06t037g_199",
    },
    {
      name: "Hợp tác quốc tế",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/lm/htqt?_afrLoop=47981275821430294&_adf.ctrl-state=ab06t037g_228",
    },
    {
      name: "Nghiên cứu trao đổi",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/lm/nctd?_afrLoop=47981306819586623&_adf.ctrl-state=ab06t037g_257",
    },
    {
      name: "Nghiên cứu khoa học",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/lm/nckh?_afrLoop=47981323681292576&_adf.ctrl-state=ab06t037g_286",
    },
    {
      name: "Phản ánh kiến nghị",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/lm/vhnkb3?_afrLoop=47981332294497712&_adf.ctrl-state=ab06t037g_315",
    },
    {
      name: "Văn hoá nghề kho bạc",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/lm/vhnkb?_afrLoop=47981393057820912&_adf.ctrl-state=ab06t037g_340",
    },
  ];

  return (
    <div className="py-6">
      <Row gutter={16}>
        <Col span={6}>
          {listMenu.map((item: any) => (
            <div
              className="h-[30px] w-full bg-transparent bg-fit bg-center bg-repeat flex justify-start items-center"
              style={{ backgroundImage: `url(/static/bg_total.jpg)` }}
            >
              <Image
                src={`/static/arr_list.jpg`}
                alt=""
                width={50}
                height={10}
              />
              <Typography.Text className="mx-2 text-sm font-bold !text-[#21436b]">
                {item.name}
              </Typography.Text>
            </div>
          ))}
        </Col>
        <Col span={12}>
          <div>
            <div className="bg-[#7facd3]">
              <Typography.Text className="uppercase text-sm font-semibold px-3 py-2 !text-white">
                Tin tức - sự kiện
              </Typography.Text>
            </div>

            <News />
          </div>
        </Col>
        <Col span={6}>1</Col>
      </Row>
    </div>
  );
}
