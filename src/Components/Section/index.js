import { Box } from "@mui/material";
import React from "react";

function Section({ children, bgcolor ,zIndex,id}) {
  return (
    <Box
      id={id}
      component={"section"}
      minHeight={"100vh"}
      sx={{
        background:
          bgcolor === "primary"
            ? "#000"
            : bgcolor === "secondary"
            ? "#00D54B"
            : "#F8F6F6",
        display:"flex",
        alignItems:"center",
        justifyContent:'center',
        position:"relative",
        zIndex:zIndex
      }}
    >
      {children}
    </Box>
  );
}

export default Section;
