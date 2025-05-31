import React from "react";

const JobStatus = ({ title, number }) => {
  return (
    <div>
      <p className="text-[#DBDEE9] text-lg mb-1 font-normal">{number}</p>
      <p className="text-[#717381] text-xs font-normal [&::first-letter]:uppercase">
        {title}
      </p>
    </div>
  );
};

export default JobStatus;
