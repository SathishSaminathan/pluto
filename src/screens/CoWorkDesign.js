import React from "react";
import { Select } from "antd";
import { AiOutlineRise } from "react-icons/ai";
import { Images } from "assets/images";

const CoWorkDesign = () => {
  return (
    <div className="coworkcontainer">
      <div className="header">
        <div className="logo">
          <img src={"http://app.revlytics.com/images/logobanner2.png"} />
        </div>
        <div className="selectionarea">
          <Select
            value="taco"
            className="customselect"
            placeholder="Select Product"
            style={{ width: 150 }}
          >
            <Select.Option value="taco">Taco</Select.Option>
          </Select>
          <Select
            className="customselect"
            placeholder="Select Dashboard"
            value="Dashboard"
            style={{ width: 150 }}
          ></Select>
          <div className="profileName">S</div>
        </div>
      </div>
      <div className="body">
        <div className="welcomeArea">
          <div className="welcome">
            <div className="content">
              <span className="name">Hi, John</span>
              <span className="update">Last Update 10 min ago</span>
            </div>
            <div className="image">
              <img
                src={
                  "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Hello_qnas.svg"
                }
              />
            </div>
          </div>
          <div className="configArea">
            <div className="name">
              <span className="t">Sathish RET</span>
              <div className="conf">
                <button className="custbut">
                  <span>Configure</span>
                </button>
                <button className="inverted">
                  <span>Save</span>
                </button>
              </div>
            </div>
            <div className="datepic">
              <Select
                style={{ width: 500 }}
                value="taco"
                className="customselect"
                placeholder="Select Product"
              >
                <Select.Option value="taco">
                  Last 30 days Apr 2, 2020 - May 2, 2020
                </Select.Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="addsubmit">
          <div className="filterButton">
            <button className="custbut">
              <span>Add Filter</span>
            </button>
            <button className="inverted">
              <span>Submit</span>
            </button>
          </div>
          <div className="ddARea">
            {[
              "Campaign",
              "DataSource",
              "MID",
              "Order Status",
              "Product",
              "Country",
            ].map((val, i) => (
              <Select
                value={val}
                className="customselect"
                placeholder="Select Product"
                style={{ width: "22%", marginBottom: 10 }}
              >
                <Select.Option value="taco">{val}</Select.Option>
              </Select>
            ))}
          </div>
        </div>
        <div className="dashboardcard">
          {[
            "Clicks",
            "Decline Rate",
            "Net Revenue",
            "Refund Count",
            "Total Dollar",
            "Order Revenue",
          ].map((val, i) => (
            <div className="cardstyle">
              <div className="name">{val}</div>
              <div className="valuearea">
                <div className="value" style={{ fontSize: 20 }}>
                  $ 50000
                </div>
              </div>
              <div className="valuearea">
                <AiOutlineRise size={30} color={"#4cd97b"} />
                <div className="value">18%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoWorkDesign;
