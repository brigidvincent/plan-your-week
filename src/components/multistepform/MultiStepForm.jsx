import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./MultiStepForm.css";


function MultiStepForm() {
  
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
  };
  const goToPlanner = () => {
    navigate("/planner");
  };

  return (
    <motion.div className="multistep-container" layout transition={{
      layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }}>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <Step1
              nextStep={nextStep}
              handleChange={handleChange}
              values={formData}
            />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <Step2
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={formData}
            />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <Step3
              prevStep={prevStep}
              handleChange={handleChange}
              values={formData}
              goToPlanner={goToPlanner}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default MultiStepForm;