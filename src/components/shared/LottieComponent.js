import React from "react";
import Lottie from "react-lottie";

import LottieFile from "assets/lottie";
import { Lotties } from "constants/Appconstants";

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const getAnimationType = (type) => {
  let lottie = null;
  switch (type) {
    case Lotties.RobotHand:
      lottie = LottieFile.RobotHand;
      break;
    case Lotties.FAQ:
      lottie = LottieFile.FAQ;
      break;
    case Lotties.RECORD_NOT_FOUND:
      lottie = LottieFile.RecordNotFound;
      break;
    default:
      lottie = LottieFile.RobotHand;
      break;
  }
  return lottie;
};

const LottieComponent = ({
  width = 190,
  height = 250,
  type,
  isStopped = false,
  isPaused = false,
}) => {
  return (
    <Lottie
      options={{ ...defaultOptions, animationData: getAnimationType(type) }}
      width={width}
      height={height}
      isStopped={isStopped}
      isPaused={isPaused}
    />
  );
};

export default LottieComponent;
