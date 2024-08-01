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
          <Col xs={24} lg={4} />
          <Col xs={24} lg={16}>
            <FormVerifyCode />
          </Col>
          <Col xs={24} lg={4} />
        </Row>
      </div>
    </div>
  );
}
