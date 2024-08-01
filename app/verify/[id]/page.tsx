"use client";
import BasicInfor from "@/components/BasicInfor";
import FormVerifyCode from "@/components/FormVerifyCode";
import NotifyClient from "@/components/NotifyClient";
import { Col, Row } from "antd";

export default function VerifyDetailPage() {
  return (
    <div>
      <BasicInfor />
      <NotifyClient />

      <div className="py-3">
        <Row>
          <Col span={4} />
          <Col span={16}>
            <FormVerifyCode />
          </Col>
        </Row>
      </div>
    </div>
  );
}
