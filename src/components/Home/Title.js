import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Title = () => {
  return (
    <Container>
      <Row sm="12">
        <Col className="d-flex justify-content-center align-items-center">
          <h1 className="text-warning text-center mt-4 mb-2 p-2 bg-dark w-50 rounded fw-bold head">
            My Reads
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
