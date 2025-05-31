import Image from "next/image";
import JobStatus from "./JobStatus";
import JobTile from "./JobTile";

export default function JobCard({ job }) {
  const titles = [
    {
      icon: "/clock.png",
      label: "Contract",
    },
    {
      icon: "/currency.png",
      label: "50 - 100 INR/hr",
    },
    {
      icon: "/network.png",
      label: "2 - 4 Years",
    },
  ];

  return (
    <div className="bg-[#131414] rounded-xl shadow-md text-white p-0.5">
      <div className="p-4 pb-0">
        <div className="flex justify-between">
          <h2 className="text-base font-semibold">{job.title}</h2>
          <div className="flex flex-col justify-between w-1.5 h-4">
            <span className="w-0.5 h-0.5 bg-[#BCC2C3] rounded-full"></span>
            <span className="w-0.5 h-0.5 bg-[#BCC2C3] rounded-full"></span>
            <span className="w-0.5 h-0.5 bg-[#BCC2C3] rounded-full"></span>
          </div>
        </div>
        <p className="text-xs text-[#B3B3B3] italic mt-0.5 mb-1.5">{`Posted at: 56 minutes ago`}</p>
        <div className="mt-3 flex gap-4 text-sm">
          {titles.map((el) => (
            <JobTile
              key={el.label}
              label={el.label}
              icon={el.icon}
              jobTitle={job.title}
            />
          ))}
        </div>
        <p className="font-normal text-sm mt-3 truncate-2-lines text-[#BCC2C3]">
          {job.description}
        </p>
      </div>
      <div className="flex bg-[#080808] mt-4 items-center justify-between rounded-tl rounded-tr rounded-br-[8px] rounded-bl-[8px] px-4">
        {Object.entries(job.stats).map(([key, value]) => (
          <JobStatus key={key} title={key} number={value} />
        ))}
      </div>
    </div>
  );
}
