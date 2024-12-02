import React, { useState } from 'react';


const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ['Contact Details', 'Shipping Address', 'Payment', 'Delivered'];

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  return (
    <div className="stepper-container">
      <h2>Stepper</h2>
      <div className="stepper">
        {steps.map((step, index) => (
          <div key={index} className={`step ${index <= currentStep ? 'active' : ''}`}>
            <div
              className="circle"
              onClick={() => goToStep(index)}
              style={{ cursor: 'pointer' }}
            >
              {index <= currentStep ? '✔' : ''}
            </div>
            <p>{step}</p>
            {index < steps.length - 1 && (
              <div className={`progress-line ${index < currentStep ? 'completed' : ''}`} />
            )}
          </div>
        ))}
      </div>

      {currentStep === steps.length - 1 ? (
        <h3>Order Delivered successfully! 🎉</h3>
      ) : null}

      <div className="stepper-buttons">
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
