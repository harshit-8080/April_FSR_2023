import React from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart({ storage }) {
  // console.log("Inside PieChart componenrt", storage);

  const data = {
    labels: [
      `BitCoin Market ${storage?.used}`,
      `Etherum Market ${storage?.system}`,
      `DodgeCoin Market ${storage?.available}`,
    ],
    datasets: [
      {
        data: [storage?.used, storage?.system, storage?.available],
        backgroundColor: [
          "rgb(248,96,77)",
          "rgb(79,214,184)",
          "rgb(168,213,130)",
        ],
      },
    ],
  };
  const option = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Crypto Market Distribution in 2023",
        color: "white",
        font: {
          size: "18px",
        },
      },
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          position: "relative",
          margin: "50px auto",
          width: "500px",
          height: "300px",
        }}
      >
        <Pie data={data} options={option} />
      </div>
    </>
  );
}

export default PieChart;
