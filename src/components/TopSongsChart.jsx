/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// [
//     {
//         "id": 1,
//         "title": "Blinding Lights",
//         "artist": "The Weeknd",
//         "streams": 1502345
//     },
//     {
//         "id": 2,
//         "title": "Flowers",
//         "artist": "Miley Cyrus",
//         "streams": 1324590
//     }
// ]

export default function TopSongsChart({ data }) {
  console.log("songs", data);
  const chartData = {
    labels: data.map((d) => d.title),
    datasets: [
      {
        label: "Streams",
        data: data.map((d) => d.streams),
        backgroundColor: "#3b82f6",
      },
    ],
  };
  const options = {
    indexAxis: "y", // Makes bars horizontal
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl ml-4 font-semibold mb-4">Top 5 Streamed Songs</h3>
      <div className="h-98 min-w-full">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
