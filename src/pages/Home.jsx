import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import "./styling/Homestyles.css";

function Home() {
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
    <div className = "homepage">
      <header>
        <h1>Weekly Planner</h1>
      </header>

      {/* first button */}
      <FadeIn>
      <Button className="home-btn" onClick={() => navigate("/signup")}>
        Sign up?
      </Button>
      </FadeIn>

      {/* second button */}
      <FadeIn delay={0.2}>
      <h4>Already have an account?</h4>
      <Button className="home-btn" onClick={() => navigate("/login")}>
        Check my week
      </Button>
      </FadeIn>
    </div>
    </motion.div>
  );
}

export default Home;