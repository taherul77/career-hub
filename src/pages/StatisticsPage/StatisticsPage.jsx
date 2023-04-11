import React from "react";
import Chart from "../../component/Chart/Chart";

const StatisticsPage = () => {
  const data = [
    {
      type: "Assignment-01",
      Mark: "60",
    },
    {
      type: "Assignment-02",
      Mark: "59",
    },
    {
      type: "Assignment-03",
      Mark: "60",
    },
    {
      type: "Assignment-04",
      Mark: "60",
    },
    {
      type: "Assignment-05",
      Mark: "57",
    },
    {
      type: "Assignment-06",
      Mark: "60",
    },
    {
      type: "Assignment-07",
      Mark: "60",
    },
    {
      type: "Assignment-08",
      Mark: "60",
    },

    {
      type: "Assignment-09",
      Mark: "?",
    },
  ];

  return (
    <div>
        <div className="container px-4 py-8 mx-auto md:p-8 text-center">
        <h2 className="text-2xl font-bold sm:text-4xl">
                    Assignment Mark
                </h2>
        </div>
       <Chart />
    </div>
  );
};

export default StatisticsPage;
