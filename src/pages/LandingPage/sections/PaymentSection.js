import { Box, Stack } from "@mui/material";
import Section from "../../../Components/Section";
import CustomTypography, {
  fontColorStanderd,
  fontStanderd,
} from "../../../Components/CustomTypography";
import motion from 'framer-motion'
function PaymentsSection() {
  return (
    <Section id={"section2"}>
      <Box
        component={"img"}
        src="./assets/vector2.svg"
        sx={{ position: "absolute", zIndex: 1, bottom: "21px", width: "100%" }}
      />
     
      <Box
        component={"img"}
        src="./assets/payments-phone-1.svg"
        sx={{
          position: "absolute",
          zIndex: 2,
          bottom: { lg: "202px", md: "100px", xs: "50px", sm: "100px" },
          width: { xs: "350px", sm: "600px", md: "750px", lg: "750px " },
        }}
      />

      <Stack
        width="352px"
        sx={{
          position: "absolute",
          zIndex: 2,
          top: { lg: "234px", md: "223px", sm: "100px", xs: "200px" },
          left: { lg: "237px", md: "137px", xs: "none", sm: "none" },
        }}
        gap={"13px"}
      >
        <CustomTypography
          fontSize={"40px"}
          fontType={fontStanderd.Highlight}
          color={fontColorStanderd.Highlight}
          textTransform={"captilize"}
          lineHeight={"22px"}
        >
          Payments
        </CustomTypography>
        <CustomTypography
          fontSize={"16px"}
          textTransform={"captilize"}
          lineHeight={"22px"}
          fontType={fontStanderd.normalText}
          color={fontColorStanderd.normalTextB}
        >
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </CustomTypography>
      </Stack>
      <Box
        component={"img"}
        src="./assets/payments-column.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          bottom: { lg: "47px", md: "47px", sm: "47px", xs: "47px" },
          right: 0,
          width: { xs: "300px", sm: "600px", md: "600px", lg: "793px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/payments-columnRight.svg"
        sx={{
          position: "absolute",
          zIndex: 3,
          left: 0,
          bottom: 0,
          width: { xs: "80px", sm: "140px", md: "140px", lg: "187px" },
        }}
      />

      <Box
        component={"img"}
        src="./assets/payments-pillar-medium.svg"
        sx={{
          position: "absolute",
          zIndex: 3,
          left: { lg: "150px", md: "100px", sm: "100px", xs: "50px" },
          bottom: { lg: "25.7px", md: "25.7px", xs: "10px", sm: "25.7px" },
          width: { xs: "50px", sm: "80px", md: "150px", lg: "172px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/payments-pillar-small.svg"
        sx={{
          position: "absolute",
          zIndex: 2,
          left: { lg: "259px", md: "180px", sm: "150px", xs: "85px" },
          bottom: { lg: "58px", md: "58px", sm: "48px", xs: "18px" },
          width: { lg: "135px", md: "135px", sm: "65px", xs: "35px" },
        }}
      />

      <Box
        component={"img"}
        src="./assets/payments-pillar-medium.svg"
        sx={{
          position: "absolute",
          zIndex: 2,
          left: { lg: "511px", md: "320px", sm: "251px", xs: "120px" },
          bottom: { lg: "37.5px", md: "37.5px", sm: "37.5px", xs: "13.5px" },
          width: { lg: "172px", md: "160px", sm: "75px", xs: "55px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/payments-column2.svg"
        sx={{
          position: "absolute",
          zIndex: 2,
          right: { lg: "261px", md: "201px", sm: "201px", xs: "85px" },
          bottom: 0,
          width: { lg: "810px", md: "710px", sm: "610px", xs: "300px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/payments-pillar-medium.svg"
        sx={{
          position: "absolute",
          zIndex: 1,
          right: { lg: "219px", md: "159px", sm: "177px", xs: "80px" },
          bottom: { lg: "169px", md: "119px", sm: "140px", xs: "80px" },
          width: { lg: "172px", md: "170px", sm: "110px", xs: "50px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/payments-pillar-medium3.svg"
        sx={{
          position: "absolute",
          zIndex: 3,
          right: { lg: "536px", md: "", sm: "", xs: "" },
          bottom: 0,
          width: { lg: "172px", md: "172px", sm: "72px", xs: "72px" },
        }}
      />
      <Box
        component={"img"}
        src="./assets/payments-pillar-large.svg"
        sx={{
          position: "absolute",
          zIndex: 2,
          right: { lg: "518px", md: "418px", sm: "328px", xs: "518px" },
          bottom: { lg: "84.69px", md: "55px", sm: "55px", xs: "64px" },
          width: { lg: "210px", md: "150px", sm: "110px", xs: "10px" },
        }}
      />
    </Section>
  );
}

export default PaymentsSection;
