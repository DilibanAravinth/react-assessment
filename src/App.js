import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Button/Card';
import Input from './components/Button/Input';

const App = () => {

  const [formDetials, setFormDetials] = useState({});
  const [jobListings, setJobListings] = useState([]);
  const [currentStep, setCurrentStep] = useState(2);

  const resetForm = () => {
    setFormDetials({
      jobTitle: "", company: "", industry: "", location: "", remote: "",
      experienceMin: "", experienceMax: "", salaryMin: "", salaryMax: "", totalEmployees: "", applyType: ""
    })
  };

  const saveForm = (e) => {
    e.preventDefault();
    let formData = {};

    e.target.querySelectorAll('input').forEach(function (input) {
      var name = input.getAttribute('name');
      formData[name] = input.value;
    });
    
    setFormDetials(prev => ({ ...prev, ...formData }));
    
    if (currentStep === 1) {
      setCurrentStep(2);
    }
    else {
      const temp = jobListings;
      temp.push(formDetials);
      setJobListings(temp)
      resetForm();
      setCurrentStep(1);

    }
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-100'>
      <Card title={"Create a job"} subTitle={`Step ${currentStep}`}>
        <form className='contents' onSubmit={saveForm}>
          {currentStep === 1 && 
          <>
          <Input type={"text"} name={"jobTitle"} placeholder={"ex. UX UI Designer"} label={"Job title"} required={true} />
            <Input type={"text"} name={"company"} placeholder={"ex. Google"} label={"Company name"} required={true} />
            <Input type={"text"} name={"industry"} placeholder={"ex. Information Technology"} label={"Industry"} required={true} />
            <div className='flex gap-6'>
              <Input styles="flex-auto" name={"location"} type={"text"} placeholder={"ex. Chennai"} label={"Location"} required={false} />
              <Input styles="flex-auto" name={"remote"} type={"text"} placeholder={"ex. In-office"} label={"Remote type"} required={false} />
            </div>
            </>}
          
          {currentStep === 2 && 
          <>
            <div className='flex gap-6 items-end'>
              <Input styles="flex-auto" name={"experienceMin"} type={"text"} placeholder={"Minimum"} label={"Experience"} required={false} />
              <Input styles="flex-auto" name={"experienceMax"} type={"text"} placeholder={"Maximum"} label={""} required={false} />
            </div>
            <div className='flex gap-6 items-end'>
              <Input styles="flex-auto" name={"salaryMin"} type={"text"} placeholder={"Minimum"} label={"Salary"} required={false} />
              <Input styles="flex-auto" name={"salaryMax"} type={"text"} placeholder={"Maximum"} label={""} required={false} />
            </div>
            <Input type={"text"} name={"totalEmployees"} placeholder={"ex. 100"} label={"Total employee"} required={false} />
            <Input type={"radio"} name={"applyType"} label={"Apply type"} required={false} values={[{ name: "Quick apply", value: "quick" }, { name: "External apply", value: "external" }]} />
            </>}
          
          <div className='mt-auto ml-auto'>
            <Button
              styles={{
                type: 'primary',
                fontSize: 'text-base',
                fontWeight: 'font-medium',
                paddingX: 'px-4',
                paddingY: 'py-2',
                borderRounded: 'rounded-md',
              }}
              content={currentStep === 1 ? "Next" : "Save"}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default App;
