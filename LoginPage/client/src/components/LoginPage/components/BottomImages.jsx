import React from 'react'
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";


export const BottomImages = (props) => {
  const currentTheme = useTheme();

    return (
        // The image design at the bottom of the page
    <div>
          <Box
      component="img"
      alt="bottom image"
      src={`${process.env.PUBLIC_URL}images/${
        currentTheme.palette.mode === "light" ? "Light" : "Dark"
      }Vectors.png`}
      sx={{
        height: "10%",
        width: "100%",
        position: "absolute",
        bottom: "0",
      }}
    ></Box>
    {/* The image use to toggle light and dark mode */}
    <Box
      component="img"
      alt="bottom image"
      src={`${process.env.PUBLIC_URL}images/DarkMode.png`}
      onClick={props.toggleLightMode}
      sx={{ position: "absolute", bottom: "0" }}
    ></Box>
    </div>
    )
}