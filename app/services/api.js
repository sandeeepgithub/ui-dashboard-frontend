import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getJobs = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const res = await axios.get(`${API_BASE}/job?${query}`);
  return res.data;
};
