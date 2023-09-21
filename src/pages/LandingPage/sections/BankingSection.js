import React from "react";
import Section from "../../../Components/Section";
import { Box, Stack } from "@mui/material";
import CustomTypography, {
  fontColorStanderd,
  fontStanderd,
} from "../../../Components/CustomTypography";

function BankingSection() {
  return (
    <Section id="section3" bgcolor={"secondary"}>
      <Box
        component={"img"}
        src="./assets/banking-phone.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          width: { lg: "350px", md: "200px", sm: "200px", xs: "150px" },
        }}
      />

      <Stack
        width="352px"
        sx={{
          position: "absolute",
          zIndex: 2,
          top: { lg: "313px", md: "50px", sm: "50px", xs: "100px" },
          left: { lg: "225px", md: "none", sm: "none", xs: "none" },
        }}
        gap={"13px"}
      >
        <CustomTypography
          fontSize={"40px"}
          fontType={fontStanderd.Highlight}
          color={fontColorStanderd.normalTextW}
          textTransform={"captilize"}
          lineHeight={"22px"}
        >
          Banking
        </CustomTypography>
        <CustomTypography
          fontSize={"16px"}
          textTransform={"captilize"}
          lineHeight={"22px"}
          fontType={fontStanderd.normalText}
          color={fontColorStanderd.normalTextB}
        >
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </CustomTypography>
      </Stack>
      <Box
        component={"img"}
        src="./assets/banking-hole.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          top: 0,
          width: { lg: "320px", md: "320px", sm: "200px", xs: "150px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-hole-bottom.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          right: { lg: "258px", md: "258px", sm: "10px", xs: "10px" },
          bottom: 0,
          width: { lg: "380px", md: "320px", sm: "200px", xs: "200px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-column.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          top: { lg: "105px", md: "80px", sm: "50px", xs: "40px" },
          left: { lg: "74px", md: "74px", sm: "50px", xs: "50px" },
          width: { lg: "130px", md: "130px", sm: "50px", xs: "40px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-stairs-2.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: "113px",
          left: { lg: "57px", md: "57px", sm: "10x", xs: "10px" },
          width: { lg: "80px", md: "80px", sm: "50px", xs: "50px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-track-1.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          top: { lg: "165px", md: "205px", sm: "205px", xs: "255px" },
          left: { lg: "354px", md: "354px", sm: "170px", xs: "70px" },
          width: { lg: "270px", md: "200px", sm: "150px", xs: "100px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-ramp-2.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          bottom: { lg: "44px", md: "20px", sm: "100px", xs: "200px" },
          left: { lg: "157px", md: "157px", sm: "50px", xs: "50px" },
          width: { lg: "300px", md: "300px", sm: "150px", xs: "100px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-tube.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          bottom: 0,
          left: { lg: "489px", md: "489px", sm: "209px", xs: "49px" },
          width: { lg: "150px", md: "150px", sm: "100px", xs: "100px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-cubes.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          bottom: { lg: "83.89px", md: "83.89px", sm: "100px", xs: "150px" },
          right: { lg: "273px", md: "273px", sm: "150px", xs: "100px" },
          width: { lg: "240px", md: "240px", sm: "200px", xs: "100px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-stairs-1.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: { lg: "220px", md: "220px", sm: "220px", xs: "220px" },
          right: { lg: "123px", md: "123px", sm: "63px", xs: "23px" },
          width: { lg: "120px", md: "100px", sm: "60px", xs: "50px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-track-2.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          top: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
          right: { lg: "177px", md: "177px", sm: "17px", xs: "17px" },
          width: { lg: "250px", md: "250px", sm: "250px", xs: "150px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-monster.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          bottom: { lg: "63px", md: "63px", sm: "63px", xs: "63px" },
          right: { lg: "68px", md: "68px", sm: "68px", xs: "68px" },
          width: { lg: "120px", md: "100px", sm: "80px", xs: "80px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/banking-ramp-1.svg"
        sx={{
          position: "absolute",
          zIndex: 0,
          top: { lg: "213px", md: "213px", sm: "206px", xs: "266px" },
          right: { lg: "297px", md: "297px", sm: "197px", xs: "107px" },
          width: { lg: "280px", md: "280px", sm: "180px", xs: "80px" },
        }}
      />
    </Section>
  );
}

export default BankingSection;
