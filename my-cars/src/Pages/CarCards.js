import React, { useState } from "react";
import "../Styles/CarCards.css"; 
import carData from "../Data/carData.json";
import formFields from "../Data/formFields.json";

const CarCards = () => {
  const [displayCount, setDisplayCount] = useState(10);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [submissionCounter, setSubmissionCounter] = useState(1);

  const handleCarItemClick = (car) => {
    setSelectedCar(car);
    setShowForm(true);
  };

  const handleChange = (e, fieldKey) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldKey]: value,
    }));
    console.log("formData",formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formValues = {};
    formValues.id = submissionCounter.toString();
    formFields.forEach((field) => {
      formValues[field.key] = formData[field.key] || (selectedCar ? selectedCar[field.key] || "" : "");
    });
    
    setSubmittedData((prevSubmittedData) => [...prevSubmittedData, formValues]);

  setSubmissionCounter(submissionCounter + 1);
    setFormData({});
    setShowForm(false);
  };
  
  
  

  return (
    <div className="car-grid">
      <div className="row">
        {carData.slice(0, displayCount).map((car, index) => (
          <div key={car.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div
              className="card car-item shadow"
              onClick={() => handleCarItemClick(car)}
            >
              <img src={car.logo} className="card-img-top" alt={car.model} />
              <div className="card-body">
                <h5 className="card-title text-secondary">{car.model}</h5>
              </div>
            </div>
          </div>
        ))}
        {displayCount < carData.length && (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div
              className="card car-item show-more shadow"
              onClick={() => setDisplayCount(displayCount + 10)}
            >
              <div className="card-body">
                <h5 className="card-title">Show More</h5>
              </div>
            </div>
          </div>
        )}
      </div>

      {showForm && selectedCar && (
        <div className="row">
          <div className="col-12">
            <div className="form-container">
              <form onSubmit={handleFormSubmit}>
                <div className="row">
                {formFields.map((field) => (
                 <div className="col-md-6" key={field.key}>
                     <label htmlFor={field.key}>{field.label}:</label>
                       <input
                        type="text"
                         value={field.readOnly ? selectedCar[field.key] || "" : formData[field.key] || ""}
                         className="form-control"
                         name={field.key}
                         readOnly={field.readOnly}
                      onChange={(e) => handleChange(e, field.key)}
                        />
                    </div>
                    ))}

                  <div className="col-md-6">
                    <label htmlFor="photo">Photo:</label>
                    <input
                      type="file"
                      className="form-control"
                      id="photo"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
     {submittedData && (
        <div className="row">
          <div className="col-12">
            <h2>Submitted Data:</h2>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};


export default CarCards;
