import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const fontStanderd = {
  Highlight: "Agrandir-GrandHeavy",
  subHighlight : 'Agrandir-Regular',
  normalText: "Mulish",
};

export const fontColorStanderd = {
  Highlight: "#00D54B",
  normalTextW: "#fff",
  normalTextB: "#000",
};

function CustomTypography({ fontWeight,fontType,lineHeight,textTransform, children, color ,width, fontSize,component,href,top,bottom,position,left,right,zIndex}) {
  const theme = useTheme();
  const [fontFamily,setfontFamily] = useState(0);



  useEffect(()=>{
    if(fontType === fontStanderd.Highlight){
      setfontFamily(theme.typography.fontFamily[0]);
    }else if(fontType === fontStanderd.normalText){
      setfontFamily(theme.typography.fontFamily[1]);
    }else{
      setfontFamily(theme.typography.fontFamily[2]);
    }
  },[fontFamily])

  return (
    <Typography
    component={component}
    href={href}
      sx={{
        fontFamily,
        fontStyle:"normal",
        color:
          color === fontColorStanderd.Highlight
            ? fontColorStanderd.Highlight
            : color === fontColorStanderd.normalTextB
            ? fontColorStanderd.normalTextB
            : fontColorStanderd.normalTextW,
        fontSize:fontSize,
        textDecoration:"none",
        textTransform:(textTransform)?
        textTransform:"uppercase",
        letterSpacing:"0.5px",
        position:position,
        top:top,
        bottom :bottom,
        right :right,
        left :left,
        lineHeight:lineHeight,
        zIndex:zIndex,
        width:width,
        fontWeight:fontWeight,
      }}
    >
      { children }
    </Typography>
  );
}

export default CustomTypography;
