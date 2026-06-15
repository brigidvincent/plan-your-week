import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import "./styling/Signupstyles.css";
import MultiStepForm from "../components/multistepform/MultiStepForm";
import backArrow from "../assets/back-svgrepo-com.svg";

function Signup() {
    const navigate = useNavigate();

    return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {/*above is the animation for the whole page, below is the content of the page */}
    <div className = "signup-page">
        <button className="back-button" onClick={() => navigate("/")}><img className="icon" src={backArrow} alt="Back" /></button>
        <FadeIn delay={0.2}>
          <h1>Let's get you set up!</h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="multistepform">
        <MultiStepForm />
        </div>
        </FadeIn>
    </div>
    </motion.div>
  );
}

export default Signup;