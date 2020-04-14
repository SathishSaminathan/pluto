import React from "react";
import { Row, Col } from "antd";
import TextArea from "antd/lib/input/TextArea";
import LottieComponent from "components/shared/LottieComponent";
import LottieFile from "assets/lottie";
import "../style.scss";
import { Images } from "assets/images";
import { Lotties } from "constants/Appconstants";

const GetStarted = (props) => {
  console.log("props", props);
  return (
    <Row className="getStartedContainer">
      <Col style={{ width: "98%" }}>
        <Row className="homeContainer">
          <Col className="left">
            <img src={Images.getStarted} />
          </Col>
          <Col className="right">
            <Row style={{ height: "100%" }}>
              <Col
                xl={24}
                style={{
                  padding: 15,
                  display: "flex",
                  // justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <Col>
                  <Col xl={24}>
                    <img src={Images.logo} />
                  </Col>
                  <Col xl={24}>
                    <LottieComponent type={Lotties.FAQ} width={"50%"} />
                  </Col>
                </Col>
                <Col>
                  <Col xl={24} style={{ paddingTop: 10 }}>
                    <p style={{ fontSize: 20, fontStyle: "italic" }}>
                      Like an astronaut traveling through space, our info-naut
                      "PLUTO" travels and explores your content, learns about
                      them using the state of the art "Scalable Artificial
                      Intelligence" algorithms; in-order to act as your
                      "associate" to answer questions about the content using
                      plain and simple natural language.
                    </p>
                  </Col>
                  <Col>
                    <button
                      className="customButton"
                      onClick={() => props.history.push("/home")}
                    >
                      Get Started
                    </button>
                  </Col>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GetStarted;
