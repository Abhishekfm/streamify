/* eslint-disable react/prop-types */
import { Line, Pie } from "react-chartjs-2";

export const UserGrowthChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export const RevenuePieChart = ({ data, onSegmentClick }) => {
  const options = {
    onClick: (_, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        onSegmentClick(data.labels[index]);
      }
    },
  };

  return <Pie data={data} options={options} />;
};
