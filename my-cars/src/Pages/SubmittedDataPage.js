import React, { useState, useEffect } from "react";
import { useSubmissionContext } from '../helpers/SubmissionContext';

const SubmittedDataPage = () => {
  const { submittedData } = useSubmissionContext();
  const [filteredData, setFilteredData] = useState(submittedData);
  const [filterConditions, setFilterConditions] = useState({
    model: "",
    location: "",
    color: "",
    owners: "",
    year: "",
    transmission: "",
    insurance: "",
    externalFitments: "",
    kms: "",
  });

  useEffect(() => {
    applyFilters();
  }, [filterConditions, submittedData]);

  const applyFilters = () => {
    const filteredResults = submittedData.filter((data) => {
      return (
        (filterConditions.model === "" || data.model === filterConditions.model) &&
        (filterConditions.location === "" || data.location === filterConditions.location) &&
        (filterConditions.color === "" || data.color === filterConditions.color) &&
        (filterConditions.owners === "" || data.owners === filterConditions.owners) &&
        (filterConditions.year === "" || data.year === filterConditions.year) &&
        (filterConditions.transmission === "" || data.transmission === filterConditions.transmission) &&
        (filterConditions.insurance === "" || data.insurance === filterConditions.insurance) &&
        (filterConditions.externalFitments === "" || data.externalFitments === filterConditions.externalFitments) &&
        (filterConditions.kms === "" || data.kms === filterConditions.kms)
      );
    });

    setFilteredData(filteredResults);
  };

  const handleFilterChange = (field, value) => {
    setFilterConditions((prevConditions) => ({
      ...prevConditions,
      [field]: value,
    }));
  };

  return (
    <div className="container mt-5 submittedDetails">
      <div className="row">
        <div className="col-md-12 col-xl-4">
          <h2>Filters</h2>
          <label>
            Model:
            <input
              type="text"
              value={filterConditions.model}
              onChange={(e) => handleFilterChange("model", e.target.value)}
              className="form-control"
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={filterConditions.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              className="form-control"
            />
          </label>
          <label>
            Color:
            <input
              type="text"
              value={filterConditions.color}
              onChange={(e) => handleFilterChange("color", e.target.value)}
              className="form-control"
            />
          </label>
          <label>
            Owners:
            <input
              type="text"
              value={filterConditions.owners}
              onChange={(e) => handleFilterChange("owners", e.target.value)}
              className="form-control"
            />
          </label>
          <label>
            Year:
            <input
              type="text"
              value={filterConditions.year}
              onChange={(e) => handleFilterChange("year", e.target.value)}
              className="form-control"
            />
          </label>
          <label>
            Transmission:
            <input
              type="text"
              value={filterConditions.transmission}
              onChange={(e) => handleFilterChange("transmission", e.target.value)}
              className="form-control"
            />
          </label>
          <label>
            Insurance:
            <input
              type="text"
              value={filterConditions.insurance}
              onChange={(e) => handleFilterChange("insurance", e.target.value)}
              className="form-control"
            />
          </label>
          <label>
            External Fitments:
            <input
              type="text"
              value={filterConditions.externalFitments}
              onChange={(e) => handleFilterChange("externalFitments", e.target.value)}
              className="form-control"
            />
          </label>
          <label>
            KMs:
            <input
              type="text"
              value={filterConditions.kms}
              onChange={(e) => handleFilterChange("kms", e.target.value)}
              className="form-control"
            />
          </label>
        </div>
        <div className="col-md-12 col-xl-8">
          <h2>Result Details</h2>
          {filteredData.slice(0, 10).map((data) => (
            <div key={data.id} className="mb-3">
              <p>{`Model: ${data.model}, Location: ${data.location}, Color: ${data.color}, Owners: ${data.owners}, Year: ${data.year}, Transmission: ${data.transmission}, Insurance: ${data.insurance}, External Fitments: ${data.externalFitments}, KMs: ${data.kms}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubmittedDataPage;
