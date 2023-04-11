import React, { useEffect, useState } from "react";
import AppliedJobs from "../../component/AppliedJobs/AppliedJobs";


const AppliedJobPage = () => {


  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    setJobs(storedJobs);
  }, [])





  return (
    <div>
      {
        jobs.length === 0 ? <h1>You don't applied any job yet!</h1> : jobs.map((data, index) => <AppliedJobs data={data} key={index} />)
      }

    </div>
  );
};

export default AppliedJobPage;
