import { useEffect, useState } from "react";
import {
  getKeyMetrics,
  getUserGrowth,
  getRevenue,
  getTopSongs,
  getStreams,
} from "../services/api";
import KeyMetrics from "./KeyMetrics";
import UserGrowthChart from "./UserGrowthChart";
import RevenuePieChart from "./RevenuePieChart";
import TopSongsChart from "./TopSongsChart";
import { DataTable } from "./DataTable";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MenuItem, Select } from "@mui/material";
import { LoadingSpinner } from "./LoadingSpinner";

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [userGrowth, setUserGrowth] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [streams, setStreams] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [metricsRes, growthRes, revenueRes, songsRes, streamsRes] =
          await Promise.all([
            getKeyMetrics(),
            getUserGrowth(),
            getRevenue(),
            getTopSongs(),
            getStreams(),
          ]);

        setMetrics(metricsRes.data);
        setUserGrowth(growthRes.data);
        setRevenue(revenueRes.data);
        setTopSongs(songsRes.data);
        setStreams(streamsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!metrics)
    return (
      <>
        <div className="w-full h-dvh flex justify-center items-center">
          <LoadingSpinner />
        </div>
      </>
    );

  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <div className="max-w-60">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="w-full">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="p-8 w-full">
            <div className="w-full flex flex-wrap justify-between">
              <h1 className="font-bold text-[40px] pt-8 pb-8">
                Streamify Analytics
              </h1>
              <div className="mt-10">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={30}
                  label="Age"
                  height={30}
                  aria-label="Data"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten Days</MenuItem>
                  <MenuItem value={20}>Twenty Days</MenuItem>
                  <MenuItem value={30}>Thirty Days</MenuItem>
                </Select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <KeyMetrics data={metrics} />
            </div>

            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4">
              <div className="w-full">
                <UserGrowthChart data={userGrowth} />
              </div>
              <div className="w-full">
                <RevenuePieChart data={revenue} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-4">
              <TopSongsChart data={topSongs} />
              <DataTable data={streams} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
