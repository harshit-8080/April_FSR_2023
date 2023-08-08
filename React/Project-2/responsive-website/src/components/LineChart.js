import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart({ latestHits }) {
  console.log(latestHits);

  const data = {
    labels: latestHits?.months,
    datasets: [
      {
        label: "BitCoin",
        data: latestHits?.latest,
        borderColor: "rgb(75,192,192)",
        lineTension: 0.4,
      },
      {
        label: "Etherum",
        data: latestHits?.popular,
        borderColor: "rgb(255,100,132)",
        lineTension: 0.4,
      },
      {
        label: "DodgeCoin",
        data: latestHits?.featured,
        borderColor: "rgb(149,102,247)",
        lineTension: 0.4,
      },
    ],
  };

  const option = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Crypto Price Distribution Over 7 Months",
        color: "lightgreen",
        font: {
          size: "20px",
        },
      },
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "gray",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "gray",
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
        <Line data={data} options={option} />
      </div>
    </>
  );
}

export default LineChart;
