import { Button } from "@mui/material";
import React from "react";

function CustomButton({ title, icon, onClick ,bgColor,color,display,width,fontSize}) {
  return (
    <Button

      color="success"
      onClick={onClick}
      size="small"
      sx={{
        background: bgColor,
        border: (color === '#fff')? "1px solid #fff" :"1px solid #000",
        borderRadius: "7px",
        padding: "25px",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        color:color,
        fontSize:fontSize?fontSize:"12px",
        display:display?display:"flex",
        width:width,
      }}
      startIcon={ icon}
    >
      
      {title}
    </Button>
  );
}

export default CustomButton;
