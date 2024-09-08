import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJava,
  DiLinux,
} from "react-icons/di";
import {
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiSelenium,
  SiHelm,
  SiPrometheus,
  SiGithub,
  SiAmazonaws,
  SiAnsible,
  SiDocker,
  SiGrafana,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;