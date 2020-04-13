import React, { Component } from "react";
import { Row, Col } from "antd";
import TextArea from "antd/lib/input/TextArea";
import LottieComponent from "components/shared/LottieComponent";
import LottieFile from "assets/lottie";

export default class Home extends Component {
  state = { isStopped: false, isPaused: false };
  render() {
    return (
      <Row className="home">
        <Col style={{ width: "98%" }}>
          <Row className="homeContainer">
            <Col xs={2} sm={4} md={6} lg={8} xl={10} className="left">
              <Col className="cont">
                <Col className="title">Paste or Enter</Col>
                <Col style={{ textAlign: "left" }}>
                  <TextArea
                    className="textArea"
                    placeholder="Autosize height with minimum and maximum number of lines"
                    // autoSize={{ minRows: 30, maxRows: 30 }}
                  />
                </Col>
              </Col>
              <Col className="cont">
                <Col className="title">Question</Col>
                <Col style={{ textAlign: "left" }}>
                  <TextArea
                    className="textArea"
                    placeholder="Autosize height with minimum and maximum number of lines"
                    // autoSize={{ minRows: 10, maxRows: 10 }}
                  />
                </Col>
              </Col>
            </Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4} className="right">
              <LottieComponent
                width={"80%"}
                type={LottieFile.RobotHand}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
              />
              <button onClick={() => this.setState({ isStopped: true })}>
                Stop
              </button>
              <button
                onClick={() =>
                  this.setState({ isStopped: false, isPaused: false })
                }
              >
                Play
              </button>
              <button
                onClick={() =>
                  this.setState({ isPaused: !this.state.isPaused })
                }
              >
                Pause
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
