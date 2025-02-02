import { Tooltip } from "flowbite-react";
import React from "react";

const HorizontalProgress = ({ width }) => {
  width = "60%";
  //   console.log(width);
  const numericWidth = parseInt(width, 10);
  const getQualityDetails = (numericWidth) => {
    if (numericWidth <= 25) {
      return {
        color: "rgb(116, 194, 92)", // Good
        message: "Air quality is Good",
      };
    } else if (numericWidth <= 50) {
      return {
        color: "rgb(255, 193, 7)", // Moderate
        message: "Air quality is Moderate",
      };
    } else if (numericWidth <= 75) {
      return {
        color: "rgb(255, 87, 34)", // Poor
        message: "Air quality is Poor",
      };
    } else {
      return {
        color: "rgb(211, 47, 47)", // Hazardous
        message: "Air quality is Hazardous",
      };
    }
  };
  const { color, message } = getQualityDetails(numericWidth);
  return (
    <div className="w-full px-1 flex justify-center items-center">
      <div className="rounded-2xl p-3.5 bg-white w-10/12 shadow-2xl lg:my-3">
        <ul
          className="flex justify-between items-center w-full"
          // style={{ border: "2px solid red" }}
        >
          <li className="text-sm">Good</li>
          <li className="text-sm">Hazardous</li>
        </ul>
        <div className="bg-gray-300 w-full rounded-2xl mt-4">
          {/* innerprogress */}
          <div
            style={{
              backgroundColor: color,
              color: "white",
              padding: "1%",
              textAlign: "right",
              fontSize: "20px",
              borderRadius: "15px",
              width: width,
            }}
            className="flex justify-end"
          >
            <Tooltip content={message}>
              <div>
                <div
                  id="props-basic"
                  className="w-full bg-yellow-400"
                  style={{ padding: "2px", cursor: "pointer" }}
                ></div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProgress;
