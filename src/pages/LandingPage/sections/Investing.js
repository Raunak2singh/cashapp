import React from "react";
import Section from "../../../Components/Section";
import CustomTypography, {
  fontColorStanderd,
  fontStanderd,
} from "../../../Components/CustomTypography";
import { Box, IconButton, Stack } from "@mui/material";
import { FaGooglePlay } from "react-icons/fa";
import { ImTwitch } from "react-icons/im";
import CustomButton from "../../../Components/CustomButton";
import {
  AiFillApple,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";




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

function Investing() {
  return (
    <Section id="section5" bgcolor={"secondary"}>
      <CustomTypography
        fontType={fontStanderd.Highlight}
        fontSize={"40px"}
        textTransform={"captilize"}
        position={"absolute"}
        top={{ lg: "131px", md: "131px", sm: "100px", xs: "50px" }}
      >
        Investing
      </CustomTypography>
      <Box
        component={"img"}
        src="./assets/Group.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          bottom: 0,
          background: "#fff",
        }}
      />
      <Box
        component={"img"}
        src="./assets/Vector3.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          width: { xs: "150%", sm: "100%", md: "100%", lg: "100%" },
          transform: {
            xs: "rotate(90deg)",
            sm: "none",
            md: "none",
            lg: "none",
          },
        }}
      />

      <Stack
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        alignItems={"center"}
        gap={{ lg: "78px", md: "78px", sm: "48px", xs: "45px" }}
        sx={{
          position: "absolute",
          zIndex: 1,
          top: { lg: "254px", md: "200px", sm: "200px", xs: "150px" },
          padding: {
            lg: "0px 60px",
            md: "0px 60px",
            sm: "0px 60px",
            xs: "none",
          },
        }}
      >
        <Stack
          width={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
          justifyContent={{
            lg: "right",
            md: "right",
            sm: "right",
            xs: "center",
          }}
          gap={{ lg: "37px", md: "5px", sm: "5px", xs: "5px" }}
        >
          <Stack
            gap={{ lg: "8px", md: "8px", sm: "8px", xs: "5px" }}
            paddingTop={{ lg: "50px", md: "50px", sm: "10px", xs: "10px" }}
            width={{ lg: "100%", md: "100%", sm: "100%", xs: "50%" }}
          >
            <CustomTypography
              fontSize={{ lg: "40px", xs: "20px" }}
              fontType={fontStanderd.Highlight}
              color={fontColorStanderd.normalTextB}
              textTransform={"captilize"}
              lineHeight={{ lg: "40px", xs: "15px" }}
            >
              Stocks
            </CustomTypography>
            <CustomTypography
              fontSize={{ lg: "16px", xs: "10px" }}
              textTransform={"captilize"}
              lineHeight={{ lg: "22px", xs: "12px" }}
              fontType={fontStanderd.normalText}
              color={fontColorStanderd.normalTextB}
            >
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </CustomTypography>
          </Stack>

          <Box
            component={"img"}
            src="./assets/investing-stocks.svg"
            width={{ lg: "160px", md: "160px", sm: "100px", xs: "100px" }}
          />
        </Stack>
        <Stack
          width={{ lg: "50%", md: "50%", sm: "50%", xs: "100%" }}
          direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
          justifyContent={{ lg: "left", md: "left", sm: "left", xs: "center" }}
          gap={{ lg: "37px", md: "37px", sm: "10px", xs: "5px" }}
        >
          <Box
            component={"img"}
            src="./assets/investing-bitcoin.svg"
            width={{ lg: "160px", md: "160px", sm: "100px", xs: "100px" }}
          />
          <Stack
            gap={{ lg: "8px", md: "8px", sm: "8px", xs: "5px" }}
            paddingTop={{ lg: "50px", md: "50px", sm: "10px", xs: "10px" }}
            width={{ lg: "100%", md: "100%", sm: "100%", xs: "50%" }}
          >
            <CustomTypography
              fontSize={{ lg: "40px", xs: "20px" }}
              fontType={fontStanderd.Highlight}
              color={fontColorStanderd.normalTextB}
              textTransform={"captilize"}
              lineHeight={{ lg: "40px", xs: "15px" }}
            >
              Bitcoin
            </CustomTypography>
            <CustomTypography
              fontSize={{ lg: "16px", xs: "10px" }}
              textTransform={"captilize"}
              lineHeight={{ lg: "22px", xs: "12px" }}
              fontType={fontStanderd.normalText}
              color={fontColorStanderd.normalTextB}
            >
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.
            </CustomTypography>
          </Stack>
        </Stack>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "20px",
          right: "63px",
          left: "60px",
          color: "#fff",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <CustomButton
          title={"App store"}
          bgColor={"#fff"}
          color={"#000"}
          display={{ xs: "none", lg: "flex", md: "flex", sm: "none" }}
          icon={<AiFillApple style={{ color: "#00D54B", fontSize: "25px" }} />}
        />
        <CustomButton
          title={"Google play"}
          bgColor={"#fff"}
          color={"#000"}
          display={{ xs: "none", lg: "flex", md: "flex", sm: "none" }}
          icon={<FaGooglePlay style={{ color: "#00D54B", fontSize: "25px" }} />}
        />

        <Box
          sx={{
            flex: 1,
            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          }}
        />

        <CustomTypography
          fontSize={{ lg: "9px", md: "9px", sm: "9px", xs: "6px" }}
          width={"363px"}
          fontWeight={"700"}
          lineHeight={{ lg: "10px", md: "10px", sm: "10px", xs: "6px" }}
          textTransform={"captilize"}
          fontType={fontStanderd.normalText}
          color={fontColorStanderd.normalTextB}
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
          sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}
        >
          {SocialIcons.map((a, i) => (
            <IconButton key={i} sx={{ color: "#000 " }}>
              {a.icon}
            </IconButton>
          ))}
        </Stack>
      </Box>
      <Box
        component={"img"}
        src="./assets/investing-graph-1.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          left: { lg: 0, md: 0, sm: 0, xs: 0 },
          bottom: { lg: "31px", md: "100px", sm: "100px", xs: "350px" },
          width: { lg: "644px", md: "404px", sm: "110px", xs: "200px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/investing-graph-2.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          right: { lg: 0, md: 0, sm: 0, xs: 0 },
          bottom: { lg: "216px", md: "216px", sm: "216px", xs: "250px" },
          width: { lg: "255px", md: "255px", sm: "100px", xs: "100px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/investing-graph-3.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          right: { lg: 0, md: 0, sm: 0, xs: 0 },
          bottom: { lg: "29.5px", md: "29.5px", sm: "29.5px", xs: "64px" },
          width: { lg: "408px", md: "408px", sm: "200px", xs: "200px" },
        }}
      />
  <Stack direction={"column"}  gap="20px" sx={{alignItems:'center',justifyContent:"center",position:"absolute",zIndex:2,bottom:"120px",display:{lg:"none",md:"none",sm:"flex",xs:"none"}}}>
        <Stack direction={"row"}  gap="10px" >
      <CustomButton
 
          title={"App store"}
          bgColor={"#fff"}
          color={"#000"}
          icon={<AiFillApple style={{ color: "#00D54B", fontSize: "15px" }} />}
          />
        <CustomButton
       
          title={"Google play"}
          bgColor={"#fff"}
          color={"#000"}
          icon={<FaGooglePlay style={{ color: "#00D54B", fontSize: "15px" }} />}
          />
          </Stack>
          <Stack direction={"row"}>
        {SocialIcons.map((a, i) => (
          <IconButton key={i} sx={{ color: "#000 " }}>
              {a.icon}
            </IconButton>
          ))}

          </Stack>
    </Stack>
    </Section>
  );
}

export default Investing;
