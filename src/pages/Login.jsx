import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import "./styling/Loginstyles.css";

function Login() {
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
      <div className="login-page">
        <div className="login-header">
            <FadeIn>
          <h1>Welcome back!</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
          <h3>Login to see your week...</h3>
            </FadeIn>
        </div>
        <div>
            <FadeIn delay={0.4}>
        <form className="login-form">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" placeholder="youremail@gmail.com" />
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="password" placeholder="mypassword" />
            <Button className="login-btn" onClick={() => navigate("/Planner")}>
                Login
                </Button>
        </form>
            </FadeIn>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;