import React from "react";
import Section from "../../../Components/Section";
import { Box, Stack } from "@mui/material";
import CustomTypography, {
  fontColorStanderd,
  fontStanderd,
} from "../../../Components/CustomTypography";

function CashCardNBoostSection({ zIndex }) {
  return (
    <Section id="section4" bgcolor={"primary"} zIndex={zIndex}>
      <Box
        component={"img"}
        src="./assets/boost-phone.svg"
        sx={{
          position: "absolute",
          zIndex: 2,
          bottom: { lg: "none", md: "100px", sm: "200px", xs: "240px" },
          right: { lg: "558px", md: "570px", sm: "300px", xs: "160px" },
          width: { lg: "250px", md: "180px", sm: "130px", xs: "100px" },
        }}
      />

      <Box
        component={"img"}
        src="./assets/boost-stairs-1.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          right: 0,
          display: { lg: "block", md: "none", sm: "none", xs: "none" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/boost-stairs-1.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          right: 0,
          width: { md: "837px", sm: "690px", xs: "529px" },
          display: { lg: "none" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/boost-stairs-2.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          left: 0,
          width: { md: "379px", sm: "", xs: "" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/boost-burger.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: { lg: "268px", md: "230px", sm: "60px", xs: "150px" },
          right: { lg: "414px", md: "370px", sm: "450px", xs: "240px" },
          width: { lg: "70px", md: "70px", sm: "70px", xs: "60px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/boost-card.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: { lg: "403px", md: "370px", sm: "300px", xs: "150px" },
          right: { lg: "310px", md: "310px", sm: "240px", xs: "0px" },
          width: { lg: "80px", md: "60px", sm: "60px", xs: "60px" },
        }}
      />

      <Box
        component={"img"}
        src="./assets/boost-hand.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: { lg: "564px", md: "504px", sm: "430px", xs: 0 },
          right: { lg: "203px", md: "199px", sm: "135px", xs: "30px" },
          width: { lg: "80px", md: "60px", sm: "60px", xs: "60px" },
          display: { xs: "none", lg: "block", md: "block", sm: "block" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/boost-coffee.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: { lg: "115px", md: "115px", sm: "90px", xs: "55px" },
          right: { lg: "308px", md: "308px", sm: "220px", xs: "328px" },
          width: { lg: "80px", md: "60px", sm: "60px", xs: "60px  " },
        }}
      />
      <Box
        component={"img"}
        src="./assets/boost-shoe.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: { lg: "267px", md: "267px", sm: "200px", xs: "60px" },
          right: { lg: "20px", md: "20px", sm: "10px", xs: "150px" },
        }}
      />
      <Stack
        width="352px"
        sx={{
          position: "absolute",
          zIndex: 2,
          top: { lg: "236px", md: "113px", sm: "", xs: "40px" },
          left: { lg: "211px", md: "100px", sm: "50px", xs: "none" },
        }}
        gap={"13px"}
      >
        <CustomTypography
          fontSize={"40px"}
          fontType={fontStanderd.Highlight}
          color={fontColorStanderd.Highlight}
          textTransform={"captilize"}
          lineHeight={"40px"}
        >
          Cash Card & Boost
        </CustomTypography>
        <CustomTypography
          fontSize={"16px"}
          textTransform={"captilize"}
          lineHeight={"22px"}
          fontType={fontStanderd.normalText}
          color={fontColorStanderd.normalTextW}
        >
          The Cash Card is a free, customizable debit card that lets you pay
          online and in stores. It’s the only way to get Boosts—instant
          discounts that work at places where you want to spend.
        </CustomTypography>
      </Stack>
    </Section>
  );
}

export default CashCardNBoostSection;
