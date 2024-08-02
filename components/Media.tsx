import { Image, Typography } from "antd";
import { useRouter } from "next/navigation";

export default function Media() {
  const router = useRouter();
  const media = [
    {
      title: "Thứ trưởng Bộ Tài chính làm việc với Kho bạc Nhà nước",
      time: "23/03/2024",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/o/media/vid?dDocName=KBNN215210&dID=226520&_afrLoop=47984849818988130&_adf.ctrl-state=1d7h6lp7p0_30",
    },
    {
      title:
        "Kho bạc Nhà nước tiếp và làm việc với Đoàn công tác Bộ Tài chính, Kho bạc Nhà nước Hungary",
      time: "14/03/2024",
      url: "https://vst.mof.gov.vn/webcenter/portal/kbnn/r/o/media/vid?dDocName=KBNN215003&dID=226139&_afrLoop=47984894716689275&_adf.ctrl-state=1d7h6lp7p0_59#!%40%40%3F_afrLoop%3D47984894716689275%26dDocName%3DKBNN215003%26dID%3D226139%26_adf.ctrl-state%3D1d7h6lp7p0_63",
    },
  ];

  return (
    <div>
      <div className="bg-[#7facd3] p-2">
        <Image preview={false} src={"/static/tin_media.jpeg"} alt="" />
        <div>
          <Typography.Text className="text-sm uppercase !text-white font-semibold">
            <Image src="/static/camera.png" preview={false} className="pr-3" />
            Tin camera
          </Typography.Text>
        </div>
      </div>

      <div className=" bg-[#f2f7fa] p-2">
        {media.map((item) => (
          <div className="w-full flex justify-start items-start py-1 cursor-pointer">
            <div className="w-1/12">
              <Image src="/static/camera.png" preview={false} />
            </div>

            <div className="w-11/12" onClick={() => router.push(item.url)}>
              <Typography.Paragraph className="!my-0 px-2 !text-xs font-semibold">
                {item.title}
              </Typography.Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
