/* eslint-disable no-undef */

import axios from "axios";

const isDevelopment = process.env.NODE_ENV === "development";

const api = axios.create({
  baseURL: isDevelopment
    ? "http://localhost:3001"
    : "https://my-json-server.typicode.com/Abhishekfm/streamify",
});

export const getKeyMetrics = () => api.get("/keyMetrics");
export const getUserGrowth = () => api.get("/userGrowth");
export const getRevenue = () => api.get("/revenue");
export const getTopSongs = () => api.get("/topSongs?_limit=5");
export const getStreams = (params) => api.get("/streams", { params });
