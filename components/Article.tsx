import { Carousel, Col, Divider, Image, Row, Typography } from "antd";

export default function Articles() {
  const images = [
    {
      image:
        "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216975&dID=229527&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
      title: "Đoàn công tác của Quỹ Tiền tệ quốc tế (IMF) báo cáo...",
      createAt: "30/07/2024",
    },
    {
      image:
        "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216969&dID=229521&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
      title:
        "Kho bạc Nhà nước dâng hương tưởng niệm các Anh hùng liệt sĩ tại Đài tưởng niệm Bắc Sơn, Ba Đình, Hà Nội...",
      createAt: "26/07/2024",
    },
    {
      image:
        "https://vst.mof.gov.vn/webcenter/cs/groups/kbnn_tintucsukien/documents/tinbai/ym5u/mje2/~edisp/~export/KBNN216962~1/229514.jpg",
      title:
        "Công bố các quyết định về công tác cán bộ tại cơ quan Kho bạc Nhà nước",
      createAt: "24/07/2024",
    },
    {
      image:
        "https://vst.mof.gov.vn/webcenter/image/idcplg?IdcService=GET_FILE&dDocName=KBNN216947&dID=229498&RevisionSelectionMethod=LatestReleased&Rendition=Web&allowInterrupt=1&noSaveAs=1",
      title:
        "Kho bạc Nhà nước không ngừng đổi mới hoạt động cải cách hành chính hướng tới nền hành chính phục vụ...",
      createAt: "22/07/2024",
    },
  ];

  return (
    <div className="p-4">
      {images.map((item) => (
        <div>
          <div className="flex items-start w-full">
            <div className="w-1/4">
              <Image width={100} height={50} preview={false} src={item.image} />
            </div>
            <div className="px-2 w-3/4">
              <Typography.Text className="!my-0 !text-[#2c6ea8] font-semibold">
                {item.title}
              </Typography.Text>
              <span>
                <Typography.Text>({item.createAt})</Typography.Text>
              </span>
            </div>
          </div>
          <Divider className="!my-3" />
        </div>
      ))}
    </div>
  );
}
