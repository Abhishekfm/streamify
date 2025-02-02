/* eslint-disable no-undef */

import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

const api = axios.create({
  baseURL: isProduction
    ? process.env.VITE_API_BASE_URL
    : "http://localhost:3001",
});

export const getKeyMetrics = () => api.get("api/keyMetrics");
export const getUserGrowth = () => api.get("api/userGrowth");
export const getRevenue = () => api.get("api/revenue");
export const getTopSongs = () => api.get("api/topSongs?_limit=5");
export const getStreams = (params) => api.get("api/streams", { params });
