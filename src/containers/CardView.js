import JobCard from '../components/JobCard';

const CardView = () => {

  const data = [{
    jobTitle: "UX UI Designer",
    company: "Great vibes",
    industry: "Information technology",
    location: "Chennai, Tamilnadu, India",
    remote: "In-office",
    workTime: "Part-Time (9.00 am - 5.00 pm IST)",
    experienceMin: "1",
    experienceMax: "2",
    salaryMin: "30,000",
    salaryMax: "60,000",
    totalEmployees: "51 - 200",
    applyType: "both"
  }, {
    jobTitle: "Developer",
    company: "Great vibes",
    industry: "Information technology",
    location: "Chennai, Tamilnadu, India",
    remote: "In-office",
    workTime: "Part-Time (9.00 am - 5.00 pm IST)",
    experienceMin: "1",
    experienceMax: "2",
    salaryMin: "50,000",
    salaryMax: "70,000",
    totalEmployees: "51 - 200",
    applyType: "both"
  }, {
    jobTitle: "Interaction Designer",
    company: "Great vibes",
    industry: "Information technology",
    location: "Chennai, Tamilnadu, India",
    remote: "In-office",
    workTime: "Part-Time (9.00 am - 5.00 pm IST)",
    experienceMin: "1",
    experienceMax: "2",
    salaryMin: "30,000",
    salaryMax: "50,000",
    totalEmployees: "51 - 200",
    applyType: "both"
  }, {
    jobTitle: "SEO Analyst",
    company: "Great vibes",
    industry: "Information technology",
    location: "Chennai, Tamilnadu, India",
    remote: "In-office",
    workTime: "Part-Time (9.00 am - 5.00 pm IST)",
    experienceMin: "1",
    experienceMax: "2",
    salaryMin: "30,000",
    salaryMax: "50,000",
    totalEmployees: "51 - 200",
    applyType: "both"
  }]

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-100 flex-col'>
      <div className='mt-20 grid grid-cols-2 gap-24'>
        {data.map(d => {
          return <JobCard {...d} />
        })}
      </div>

    </div>
  );
};

export default CardView;
