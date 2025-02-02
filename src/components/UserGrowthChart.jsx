import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

// Register Chart.js components
ChartJS.register(...registerables);

export default function UserGrowthChart({ data }) {
  useEffect(() => {
    return () => {
      ChartJS?.helpers?.each(ChartJS.instances, function (instance) {
        instance.destroy();
      });
    };
  }, []);
  const options = {
    maintainAspectRatio: false, // Allow chart to take full height
    responsive: true,
  };

  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: "Total Users",
        data: data.map((d) => d.total),
        borderColor: "#3b82f6",
        // tension: 0.1,
      },
      {
        label: "Active Users",
        data: data.map((d) => d.active),
        borderColor: "#10b981",
        // tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-4 bg-white h-full rounded-lg shadow-sm">
      <h3 className="text-xl ml-4 font-semibold  mb-4">User Growth</h3>
      <div className="h-98">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
