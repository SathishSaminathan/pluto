import React, { useState } from "react";

const BotComponent = () => {
  const [Collapsed, setCollapsed] = useState(true);
  return (
    <div
      className="iframeContainer"
      style={{
        "--height": Collapsed ? "30vh" : "80vh",
      }}
    >
      <div onClick={() => setCollapsed(!Collapsed)} className="header"></div>
      <iframe
        src={
          "https://www.instamobile.io/react-native-tutorials/uber-react-native-geolocation/"
        }
      ></iframe>
    </div>
  );
};

export default BotComponent;
