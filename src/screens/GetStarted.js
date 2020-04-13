import React from "react";
import { Row, Col } from "antd";
import TextArea from "antd/lib/input/TextArea";
import LottieComponent from "components/shared/LottieComponent";
import LottieFile from "assets/lottie";
import "../style.scss";
import { Images } from "assets/images";

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
            <Row>
              <Col xl={24} style={{ padding: 15 }}>
                <Col xl={24}>
                  <img src={Images.logo} />
                </Col>
                <Col xl={24}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </Col>
                <Col>
                  <button
                    className="button"
                    onClick={() => props.history.push("/home")}
                  >
                    Get Started
                  </button>
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
