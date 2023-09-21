import { Box } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import PaymentsSection from "./sections/PaymentSection";
import BankingSection from "./sections/BankingSection";
import CashCardNBoostSection from "./sections/CashCardNBoostSection";
import Investing from "./sections/Investing";
import Navbar from "../../Components/Navbar";
import { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';

function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  const scrollToTop = () => {
    controls.start({ y: 0, transition: { duration: 1 } });
  };

  useEffect(() => {

    scrollToTop();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box component={"div"} sx={{ position: "relative", background: "#000" }}>
    <motion.div
      initial={{ y: 0 }}
      animate={controls}
    >
      <Navbar position={scrollPosition > 100 ? "static" : "fixed"} />
      <HeroSection />
      <PaymentsSection />
      <BankingSection />
      <CashCardNBoostSection zIndex={1} />
      <Investing />
      </motion.div>
    </Box>
  );
}

export default LandingPage;
