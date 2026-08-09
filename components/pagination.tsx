import { useState } from "react";
import { Plane } from "lucide-react";

export default function FlightPagination() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center   p-8">

      {/* Pagination Container */}
      <div className="flex items-center gap-6">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-4 py-3 rounded-full border-2 transition-all ${
            currentStep === 1
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-cyan-500 text-primary hover:bg-cyan-50"
          }`}
        >
          <Plane className="w-5 h-5 rotate-224" />
          <span className="font-medium text-sm">Previous</span>
        </button>

        {/* Steps */}
        <div className="flex items-center">
          {[1, 2, 3].map((step, index) => (
            <div key={step} className="flex items-center">
              {/* Step Circle */}
              <button
                onClick={() => setCurrentStep(step)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-all ${
                  step === currentStep
                    ? "bg-primary text-white shadow-lg scale-110"
                    : step < currentStep
                    ? "bg-cyan-100 text-primary border-2 border-cyan-300"
                    : "bg-white text-gray-400 border-2 border-gray-300"
                }`}
              >
                {step}
              </button>

              {/* Dotted Line Connector */}
              {index < 2 && (
                <div className="flex items-center mx-4">
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-1 rounded-full ${
                          step < currentStep ? "bg-cyan-400" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentStep === totalSteps}
          className={`flex items-center gap-2 px-4 py-3 rounded-full border-2 transition-all ${
            currentStep === totalSteps
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-cyan-500 text-primary hover:bg-cyan-50"
          }`}
        >
          <span className="font-medium text-sm">Next</span>
          <Plane className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}