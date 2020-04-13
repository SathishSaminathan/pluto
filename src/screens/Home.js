import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import LottieComponent from "components/shared/LottieComponent";
import LottieFile from "assets/lottie";

export default class Home extends Component {
  state = { isStopped: true, isPaused: false };

  stopAnimation = () => {
    this.setState({
      isStopped: true,
    });
  };

  startAnimation = () => {
    this.setState({ isStopped: false, isPaused: false });
    setTimeout(() => {
      this.stopAnimation();
    }, 5000);
  };
  componentDidMount() {
    this.stopAnimation();
  }
  render() {
    return (
      <Row className="home">
        <Col style={{ width: "98%" }}>
          <Row className="homeContainer">
            <Col className="left">
              <Col className="cont">
                <span className="logoName">Pluto</span>
              </Col>
              <Col className="cont">
                <Col className="title">Training data</Col>
                <Col
                  style={{ textAlign: "left" }}
                  className="textAreaContainer"
                >
                  <TextArea
                    className="textArea"
                    placeholder="feed your data"
                    autoSize={{ minRows: 13, maxRows: 13 }}
                  />
                </Col>
              </Col>
              <Col className="cont">
                <Col className="title">Questions?</Col>
                <Col
                  style={{ textAlign: "left" }}
                  className="textAreaContainer"
                >
                  <TextArea
                    className="textArea"
                    placeholder="ask your questions"
                    autoSize={{ minRows: 5, maxRows: 5 }}
                  />
                </Col>
              </Col>
              <Col style={{ width: "90%", paddingTop: 20 }}>
                {/* <button className="submitBtn">Analysis</button> */}
                <button className="button" onClick={this.startAnimation}>
                  Ask
                </button>
              </Col>
            </Col>
            <Col className="right">
              <LottieComponent
                width={"80%"}
                type={LottieFile.RobotHand}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
              />
              {/* <button onClick={() => this.setState({ isStopped: true })}>
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
              </button> */}
              <Row>
                <Col xl={24} style={{ padding: 15 }}>
                  <Col xl={24}>
                    <span className="answerTitle">Answer</span>
                  </Col>
                  <Col xl={24}>
                    <p className="answer">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
