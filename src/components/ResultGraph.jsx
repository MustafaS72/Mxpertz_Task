import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ResultGraph = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx || !chartData) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const chartConfig = {
      type: "line",
      data: {
        labels: chartData.map((data) => data.time),
        datasets: [
          {
            backgroundColor: "",
            data: chartData.map((data) => data.wpm),
            borderColor: "yellow",
            borderWidth: 1,
            label: "WPM",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    chartInstanceRef.current = new Chart(ctx, chartConfig);

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <canvas
      ref={chartRef}
      className="w-full shadow-sm shadow-gray-700"
    ></canvas>
  );
};

export default ResultGraph;
