import React, { Component } from "react";
import { Row, Col } from "antd";
import TextArea from "antd/lib/input/TextArea";
import LottieComponent from "components/shared/LottieComponent";
import LottieFile from "assets/lottie";
import { Images } from "assets/images";
import Axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: true,
      isPaused: false,
      answer: null,
      paragraph: null,
      question: null,
    };
  }

  stopAnimation = () => {
    this.setState({
      isStopped: true,
    });
  };

  startAnimation = () => {
    this.setState({ isStopped: false, isPaused: false });
    Axios.post(
      `http://3.132.110.164:5000/predict?context=${this.state.paragraph}&question=${this.state.question}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => {
        debugger;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      this.setState({
        answer: `Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem
        Ipsum.`,
      });
      this.stopAnimation();
    }, 5000);
  };
  componentDidMount() {
    this.stopAnimation();
  }
  render() {
    const { answer } = this.state;
    return (
      <Row className="home">
        <Col style={{ width: "98%" }}>
          <Row className="homeContainer">
            <Col className="left">
              <Col className="cont">
                <img src={Images.logo} style={{ width: "40%" }} />
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
                    autoSize={{ minRows: 10, maxRows: 10 }}
                    onChange={(e) =>
                      this.setState({
                        paragraph: e.target.value,
                      })
                    }
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
                    onChange={(e) =>
                      this.setState({
                        question: e.target.value,
                      })
                    }
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
                    {answer && <p className="answer">{answer}</p>}
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
