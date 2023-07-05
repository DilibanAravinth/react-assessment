import React from "react";
import Button from "./Button";

const JobCard = ({ jobTitle, company, industry, location, remote, workTime, experienceMin,
   experienceMax, salaryMin, salaryMax, totalEmployees, applyType}) => {

  return (
    <div className={`bg-c_white w-[830px] h-[320px] rounded-[10px] py-4 px-6 flex gap-2`}>
      <div>
        <img src="/assets/netflix.png" alt="job logo" className="w-12 h-12" />
      </div>
      <div>
          <p className="text-2xl">{jobTitle}</p>
          <p className="text-base">{`${company} - (${industry})`}</p>
          <p className="text-base text-t_light_grey mb-6">{`${location} ${remote}`}</p>
          <p className="text-base text-t_dark_grey mb-2">{workTime}</p>
          <p className="text-base text-t_dark_grey mb-2">Experience {`( ${experienceMin} - ${experienceMax} years)`}</p>
          <p className="text-base text-t_dark_grey mb-2">{`INR (₹) ${salaryMin} - ${salaryMax} / Month`}</p>
          <p className="text-base mb-6">{totalEmployees} employees</p>
          { applyType==="both" && <div className="flex gap-4">
          <div>
            <Button styles={{
              type:  "primary",
              fontSize: 'text-base',
              fontWeight: 'font-medium',
              paddingX: 'px-4',
              paddingY: 'py-2',
              borderRounded: 'rounded-md',
            }} content="Apply Now"/>
                </div>
                <div>
            <Button styles={{
              type:"secondary",
              fontSize: 'text-base',
              fontWeight: 'font-medium',
              paddingX: 'px-4',
              paddingY: 'py-2',
              borderRounded: 'rounded-md',
            }} content="External Apply"/>
                </div>
                </div> }
        </div>
        </div>
  );
};

JobCard.defaultProps = {
  jobTitle: "Job title", 
  company: "Great vibes",
  industry: "Information technology",
  location: "Chennai, Tamilnadu, India",
  remote: "In-office",
  workTime:"Part-Time (9.00 am - 5.00 pm IST)",
  experienceMin: "1",
  experienceMax: "2",
  salaryMin: "30,000",
  salaryMax: "50,000",
  totalEmployees: "51 - 200",
  applyType: "quick"
};

export default JobCard;
