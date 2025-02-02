/* eslint-disable no-undef */

import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

const api = axios.create({
  baseURL: isProduction
    ? process.env.VITE_API_BASE_URL
    : "http://localhost:3001",
});

export const getKeyMetrics = () => api.get("/keyMetrics");
export const getUserGrowth = () => api.get("/userGrowth");
export const getRevenue = () => api.get("/revenue");
export const getTopSongs = () => api.get("/topSongs?_limit=5");
export const getStreams = (params) => api.get("/streams", { params });
