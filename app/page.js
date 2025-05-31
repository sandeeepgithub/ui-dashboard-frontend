"use client";

import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import JobCard from "./components/JobCard";
import { getJobs } from "./services/api";
import Header from "./components/Header";

export default function Page() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async (filters = {}) => {
    try {
      const res = await getJobs(filters);
      setJobs(res.data || []);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6 w-[85%]">
      <Header title={"Jobs"} />
      <h1 className="text-2xl font-bold mb-4">Jobs Dashboard</h1>
      <Filters onFilter={fetchJobs} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </main>
  );
}
