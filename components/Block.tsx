import { Col, Row } from "antd";

export default function Block() {
  return (
    <Row gutter={8}>
      <Col xs={24} md={6} className="my-1">
        <div
          className="h-[70px] w-full bg-transparent bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/static/tthc.png)` }}
        />
      </Col>
      <Col xs={24} md={6} className="my-1">
        <div
          className="h-[70px] w-full bg-transparent bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/static/dvc.png)` }}
        />
      </Col>
      <Col xs={24} md={6} className="my-1">
        <div
          className="h-[70px] w-full bg-transparent bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/static/nv.png)` }}
        />
      </Col>
      <Col xs={24} md={6} className="my-1">
        <div
          className="h-[70px] w-full bg-transparent bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/static/covid.png)` }}
        />
      </Col>
    </Row>
  );
}
