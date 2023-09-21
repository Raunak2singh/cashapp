import {
  AppBar,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import CustomTypography, {
  fontStanderd,
} from "../CustomTypography";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
const NavLinks = [
  "Sign in",
  "Legal",
  "Licence",
  "Security",
  "Careers",
  "Press",
  "Support",
  "status",
  "Codeblog",
];

function Navbar({ position }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <AppBar position={position} sx={{ background: "none", boxShadow: "none" }}>
      <Box
        sx={{
          padding: {
            lg: "24px 60px",
            md: "24px 20px",
            sm: "24px 60px",
            xs: "24px 60px",
          },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => {
            setDrawer(true);
          }}
          sx={{
            position: "absolute",
            left: "10px",
            top: "10px",
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          <GiHamburgerMenu style={{ color: "#fff" }} />
        </IconButton>

        <Box component={"img"} src="./assets/logo.svg" />

        <Box component={"span"} sx={{ flex: 1 }} />

        <Box
          component={"div"}
          width={"100%"}
          sx={{
  
            gap: "20px",
            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {NavLinks.map((a, i) => (
            <CustomTypography
              fontType={fontStanderd.Highlight}
              fontSize={"12px"}
              key={i}
              component={"a"}
              href={"#"}
            >
              {a}
            </CustomTypography>
          ))}
        </Box>
        <Box component={"span"} sx={{ flex: 1 }} />
        <Box component={"img"} src="./assets/eyebutton.svg" />
      </Box>
      <Drawer
        sx={{ background: "none" }}
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <Box
          sx={{
            width: {
              xs: "260px",
              sm: "400px",
              background: "#000",
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <MenuItem
            color="primary"
            href={"#"}
            sx={{ textAlign: "center", padding: "10px 20px", dislay: "flex" }}
          >
            <Box component={"img"} src="./assets/logo.svg" />
            <Box compoment="span" sx={{ flex: 1 }} />
            <IconButton sx={{ color: "#fff" }} onClick={() => setDrawer(false)}>
              <CgClose style={{ color: "#fff", fontSize: "20px" }} />
            </IconButton>
          </MenuItem>
          {NavLinks.map((a, i) => (
            <React.Fragment key={i}>
              <MenuItem
                color="primary"
                href={"#"}
                sx={{
                  textAlign: "center",
                  "&:hover": { color: "green" },
                  padding: { sm: "20px", xs: "10px" },
                }}
              >
                <CustomTypography
                  fontType={fontStanderd.Highlight}
                  fontSize={"12px"}
                  key={i}
                  component={"a"}
                  href={"#"}
                >
                  {a}
                </CustomTypography>
              </MenuItem>
              <Divider sx={{ background: "#fff" }} />
            </React.Fragment>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
