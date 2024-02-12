import React, { createContext, useContext, useState } from 'react';

const SubmissionContext = createContext();

export const useSubmissionContext = () => {
  return useContext(SubmissionContext);
};

export const SubmissionProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState([]);

  const addSubmittedData = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
    console.log("data",data);
  };

  return (
    <SubmissionContext.Provider value={{ submittedData, addSubmittedData }}>
      {children}
    </SubmissionContext.Provider>
  );
};
