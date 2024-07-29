import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import Wrapper from "./components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tra cứu tài khoản",
  description: "Tra cứu tài khoản",
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
