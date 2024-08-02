import { Col, Row, Typography, Image } from "antd";
import News from "./News";
import Media from "./Media";
import { useRouter } from "next/navigation";

export default function MainNews() {
  const router = useRouter();

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

  const listMinistry = [
    { url: "http://dangcongsan.vn/", img: "/static/a1.jpg" },
    { url: "https://quochoi.vn/Pages/default.aspx", img: "/static/a2.jpg" },
    {
      url: "https://www.mof.gov.vn/webcenter/portal/btcvn",
      img: "/static/a3.jpg",
    },
    { url: "https://chinhphu.vn/", img: "/static/a4.jpg" },
  ];

  const listCQ = [
    {
      url: "https://www.gdt.gov.vn/",
      img: "/static/thue.png",
      name: "Tổng cục thuế",
    },
    {
      url: "https://www.customs.gov.vn/",
      img: "/static/dutru.png",
      name: "Tổng cục dự trữ",
    },
    {
      url: "http://www.gdsr.gov.vn/Pages/Home.aspx",
      img: "/static/haiquan.png",
      name: "Tổng hải quan",
    },
    {
      url: "https://ssc.gov.vn/webcenter/portal/ubck",
      img: "/static/ck.png",
      name: "Ủy Ban Chứng Khoán Nhà Nước",
    },
  ];

  return (
    <div className="py-6">
      <Row gutter={16}>
        <Col span={6}>
          {listMenu.map((item: any, index: number) => (
            <div
              className="h-[30px] w-full bg-transparent bg-fit bg-center bg-repeat flex justify-start items-center"
              style={{ backgroundImage: `url(/static/bg_total.jpg)` }}
              key={index}
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

          <div className="py-3">
            {listMinistry.map((item, index) => {
              return (
                <div
                  key={index}
                  className="h-[70px] w-full bg-transparent bg-fit bg-center bg-no-repeat py-1 cursor-pointer"
                  style={{ backgroundImage: `url(${item.img})` }}
                  onClick={() => router.push(item.url)}
                />
              );
            })}
          </div>
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
        <Col span={6}>
          <Media />

          <div className="py-3">
            {listCQ.map((item, index) => (
              <div
                key={index}
                className="w-full flex justify-start items-center p-2 bg-[#E9F0F8] my-1 cursor-pointer"
                onClick={() => router.push(item.url)}
              >
                <div className="w-1/5 flex items-center">
                  <Image src={item.img} alt="" width={50} height={50} />
                </div>
                <div className="w-4/5 px-2">
                  <Typography.Text className="text-sm font-semibold text-pretty">
                    {item.name}
                  </Typography.Text>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
