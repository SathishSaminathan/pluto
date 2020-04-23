import React, { Component } from "react";
import { Row, Col } from "antd";
import { toast } from "react-toastify";
import Axios from "axios";
import Rodal from "rodal";

import TextArea from "antd/lib/input/TextArea";
import LottieComponent from "components/shared/LottieComponent";
import LottieFile from "assets/lottie";
import { Images } from "assets/images";
import BotComponent from "components/shared/Bot";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: true,
      isPaused: false,
      answer: null,
      paragraph: null,
      question: null,
      isModalVisible: false,
    };
  }

  componentDidMount() {
    this.stopAnimation();
    setTimeout(() => {
      this.setState({
        isModalVisible: true,
      });
      setTimeout(() => {
        this.setState({ isModalVisible: false });
      }, 2000);
    }, 1000);
  }

  stopAnimation = () => {
    this.setState({
      isStopped: true,
    });
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  notify = () => {
    toast.configure();

    toast.error("Oops! Something went wrong", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  constructText = (text) => {
    this.setState({
      paragraph: text.replace(/\[(.*?)\]/g, "").replace(/\r?\n|\r/g, ""),
    });
  };

  askQuestion = () => {
    this.startAnimation();
    Axios.get(
      `http://122.165.203.72:9094/search-engine/api/v1/search/predict?context=${this.state.paragraph}&question=${this.state.question}`
    )
      .then((res) => {
        console.log(res);
        this.setState({
          answer:
            res.data.answer === ""
              ? "Oops! We dint find your answer, may be you can rephrase your question or check the content"
              : res.data.answer,
        });
        this.stopAnimation();
      })
      .catch((err) => {
        console.log(err);
        this.stopAnimation();
        // this.notify();
      });
  };

  startAnimation = () => {
    this.setState({ isStopped: false, isPaused: false, answer: null });
    // this.constructText(this.state.paragraph);
    // this.askQuestion();
  };
  render() {
    const { answer, question, paragraph, isModalVisible } = this.state;
    return (
      <Row className="home">
        <Col style={{ width: "98%" }}>
          {/* <Rodal
            visible={isModalVisible}
            onClose={this.toggleModal}
            animation="rotate"
          >
            <p>
              Make sure your question Doesn't have {} or [ ] 
              Keep your question short and to the point 
              Make sure there is no new line in the content
            </p>
          </Rodal> */}
          <Row className="homeContainer">
            <Col className="left">
              {/* <Col className="cont"> */}
              <img
                src={Images.logo}
                style={{ width: "40%" }}
                className="logoImage"
              />
              {/* </Col> */}

              <ul className="tipsContainer">
                <li className="heading">
                  Tips on getting good answers quickly
                </li>
                <li>Make sure your question Doesn't have {} or [ ] </li>
                <li>Keep your question short and to the point </li>
                <li>Make sure there is no new line in the content</li>
              </ul>
              <Col className="cont">
                <Col className="title">Content</Col>
                <Col
                  style={{ textAlign: "left" }}
                  className="textAreaContainer"
                >
                  <TextArea
                    value={paragraph}
                    className="textArea"
                    placeholder="Type in the content you want to get answered"
                    autoSize={{ minRows: 8, maxRows: 8 }}
                    onChange={(e) => this.constructText(e.target.value)}
                  />
                </Col>
              </Col>
              <Col className="cont" style={{ paddingTop: 10 }}>
                <Col className="title">Questions</Col>
                <Col
                  style={{ textAlign: "left" }}
                  className="textAreaContainer"
                >
                  <TextArea
                    defaultValue={question}
                    className="textArea"
                    placeholder="Ask question related to the content"
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    onChange={(e) =>
                      this.setState({
                        question: e.target.value,
                      })
                    }
                  />
                </Col>
              </Col>
              <Col style={{ width: "90%", paddingTop: 10 }}>
                {/* <button className="submitBtn">Analysis</button> */}
                {paragraph && question && (
                  <button
                    style={{ width: "17%" }}
                    className="customButton"
                    onClick={this.askQuestion}
                  >
                    Ask
                  </button>
                )}
              </Col>
            </Col>
            <Col className="right">
              <LottieComponent
                width={"80%"}
                type={LottieFile.RobotHand}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
              />
              <span style={{ fontWeight: "bold" }}>Pluto-Bot</span>
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
              {answer && (
                <Row>
                  <Col xl={24} style={{ padding: 15 }}>
                    <Col xl={24}>
                      <span className="answerTitle">Answer</span>
                    </Col>
                    <Col xl={24}>{<p className="answer">{answer}</p>}</Col>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Col>
        <BotComponent />
      </Row>
    );
  }
}
