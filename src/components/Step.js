import React from 'react';
 
const Step = ({ currentStep, onNext, onPrev }) => {
//   const isActive = currentStep === stepNumber;
//   console.log("***************",stepNumber);
  console.log("################",currentStep);
//   console.log("----------------",isActive);
  return (
    <div>
      {currentStep === 1 && (
        <>
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" required />
 
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" required />
        </>
      )}
 
      {currentStep === 2 && (
        <>
          <label htmlFor="model">Car Model:</label>
          <input type="text" id="model" name="model" required />
 
          <label htmlFor="car_price">Car Price:</label>
          <input type="number" id="car_price" name="car_price" required />
        </>
      )}
 
      {currentStep === 3 && (
        <>
          <label htmlFor="card_info">Card Number:</label>
          <input type="text" id="card_info" name="card_info" required />
 
          <label htmlFor="expiry_date">Expiry Date (MM/YY):</label>
          <input
            type="text"
            id="expiry_date"
            name="expiry_date"
            pattern="\d{2}/\d{2}"
            placeholder="MM/YY"
            required
          />
        </>
      )}
 
      <div>
        {currentStep !== 1 && (
          <button type="button" onClick={onPrev}>
            Previous
          </button>
        )}
        {currentStep !== 3 ? (
          <button type="button" onClick={onNext}>
            Next
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </div>
    </div>
  );
};
 
export default Step;