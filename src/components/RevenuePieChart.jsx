import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";

// Register Chart.js modules
ChartJS.register(ArcElement, Tooltip, Legend);

const RevenuePieChart = React.memo(function RevenuePieChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.source),
    datasets: [
      {
        label: "Revenue",
        data: data.map((d) => d.amount),
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl ml-4 font-semibold mb-4">Revenue Distribution</h3>
      <div className="h-98">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
});

export default RevenuePieChart;
