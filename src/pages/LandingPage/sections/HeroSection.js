import { Box, IconButton, Stack } from "@mui/material";
import Section from "../../../Components/Section";
import CustomTypography, {
  fontStanderd,
} from "../../../Components/CustomTypography";
import {
  AiFillApple,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { ImTwitch } from "react-icons/im";
import { BsArrowDown } from "react-icons/bs";
import CustomButton from "../../../Components/CustomButton";
import { motion } from 'framer-motion';
const SocialIcons = [
  {
    id: "0",
    icon: <ImTwitch />,
  },
  {
    id: "0",
    icon: <AiOutlineTwitter />,
  },
  {
    id: "0",
    icon: <AiOutlineInstagram />,
  },
];

function HeroSection() {
  const scrollToElement = () => {
    const element = document.getElementById('section2');
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Section id="section1" bgcolor={"primary"}>
       
      <Stack
        direction={"column"}
        width={"100%"}
        justifyContent="center"
        sx={{ position: "relative" }}
        textAlign={"center"}
        gap={{ lg: "170px", md: "160px", sm: "130px", xs: "70px" }}
      >
        <CustomTypography
          fontType={fontStanderd.Highlight}
          fontSize={{ lg: "193px", md: "180px", sm: "150px", xs: "80px" }}
          zIndex={1}
          lineHeight={"0px"}
        >
          Cash
        </CustomTypography>
        
        <CustomTypography
          fontType={fontStanderd.Highlight}
          fontSize={{ lg: "193px", md: "180px", sm: "150px", xs: "80px" }}
          zIndex={2}
          lineHeight={"0px"}
        >
          App
        </CustomTypography>
      
      </Stack>
     
      <Stack
        sx={{
          position: "absolute",
          bottom: { xs: "50px", sm: "50px" },
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          display: { lg: "none", md: "flex" },
        }}
      >
        <Stack
          direction={{ md: "row", sm: "row", xs: "column" }}
          gap={{ md: "20px", sm: "10px", xs: "10px" }}
        >
          <CustomButton
            title={"App store"}
            bgColor={"#000"}
            color={"#fff"}
            icon={
              <AiFillApple style={{ color: "#00D54B", fontSize: "25px" }} />
            }
          />
          <CustomButton
            title={"Google play"}
            bgColor={"#000"}
            color={"#fff"}
            icon={
              <FaGooglePlay style={{ color: "#00D54B", fontSize: "25px" }} />
            }
          />
        </Stack>
        <Stack
          direction={"row"}
          gap={"20px"}
          sx={{ display: { lg: "none", md: "flex", sm: "flex", xs: "flex" } }}
        >
          {SocialIcons.map((a, i) => (
            <IconButton key={i} sx={{ color: "#fff " }}>
              {a.icon}
            </IconButton>
          ))}
        </Stack>
        <IconButton
        onClick={scrollToElement}
          color="primary"
          sx={{
            display: { lg: "none", md: "block", xs: "block", sm: "block " },
          }}
          size="large"
        >
          <BsArrowDown />
        </IconButton>
      </Stack>
      <motion.div
      style={{
        position: "absolute",
        zIndex: 1 ,
      }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
      <Box
        component={"img"}
        src="./assets/intro-phone1.svg"
        sx={{
          // position: "absolute",
          // zIndex: 1,
          width: { xs: "160px", sm: "226px", md: "380px", lg: "453px" },
        }}
      />
</motion.div>
      <Box
        component={"img"}
        src="./assets/Vector.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          width: { xs: "190%", sm: "190%", md: "190%", lg: "100%" },
          transform: {
            xs: "rotate(90deg)",
            md: "rotate(90deg)",
            lg: "rotate(0deg)",
          },
        }}
      />
      <Box
        component={"img"}
        src="./assets/intro-stairs.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          right: { lg: "144px", md: "10px", sm: "100px", xs: "50px" },
          top: { md: "50px", sm: "100px", xs: "80px" },
          width: { xs: "100px", sm: "100px", md: "200px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/intro-cube2.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          width: { md: "74px", sm: "50px", xs: "50px" },
          left: { lg: "228px", md: "110px", sm: "100px", xs: "80px" },
          top: { md: "48.14px", sm: "100px", xs: "150px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/intro-cubes.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          width: { lg: "188px", md: "140px", sm: "150px", xs: "100px" },
          left: { lg: "208px", md: "150px", sm: "100px", xs: "50px" },
          bottom: { md: "66.28px", sm: "100px", xs: "100px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/intro-pillar1.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          width: { lg: "280px", md: "180px", sm: "150px", xs: "150px" },
          right: { lg: "258px", md: "158px", sm: "150px", xs: "10px" },
          bottom: "0px",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "17px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "20px",
          right: { lg: "63px", md: "50px", sm: "5px", xs: "5px" },
          left: { lg: "60px", md: "50px", sm: "5px", xs: "5px" },
          color: "#fff",
          alignItems: "center",
        }}
      >
          
        <IconButton
        onClick={scrollToElement}
          color="primary"
          sx={{
            position: "absolute",
            display: { lg: "block", md: "none", xs: "none", sm: "none" },
          }}
          size="large"
        >
          <BsArrowDown />
        </IconButton>

        <CustomButton
          title={"App store"}
          bgColor={"#000"}
          color={"#fff"}
          display={{ lg: "flex", md: "f", xs: "none", sm: "none" }}
          icon={<AiFillApple style={{ color: "#00D54B", fontSize: "25px" }} />}
        />

        <CustomButton
          title={"Google play"}
          bgColor={"#000"}
          color={"#fff"}
          display={{ lg: "flex", md: "none", xs: "none", sm: "none" }}
          icon={<FaGooglePlay style={{ color: "#00D54B", fontSize: "25px" }} />}
        />

        <Box
          sx={{
            flex: 1,
            display: { lg: "flex", md: "none", sm: "none", xs: "none" },
          }}
        />

        <CustomTypography
          fontSize={{ lg: "9px", md: "9px", sm: "9px", xs: "6px" }}
          width={{ lg: "363px" }}
          fontWeight={"700"}
          lineHeight={"13px"}
          textTransform={"captilize"}
          fontType={fontStanderd.normalText}
        >
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </CustomTypography>
        <Stack
          direction={"row"}
          gap={"20px"}
          sx={{ display: { lg: "flex", md: "none", sm: "none", xs: "none" } }}
        >
          {SocialIcons.map((a, i) => (
            <IconButton key={i} sx={{ color: "#fff " }}>
              {a.icon}
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Section>
  );
}

export default HeroSection;
