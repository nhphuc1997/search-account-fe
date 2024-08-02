import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import Wrapper from "../components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CỔNG THÔNG TIN ĐIỆN TỬ KHO BẠC NHÀ NƯỚC",
  description: "CỔNG THÔNG TIN ĐIỆN TỬ KHO BẠC NHÀ NƯỚC",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Wrapper>{children}</Wrapper>
        </AntdRegistry>
      </body>
    </html>
  );
}
