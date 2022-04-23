import React from "react";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <div>
      {/* The sign in text */}
      <Typography variant="subtitle1">Sign in</Typography>
      {/* The sign in message */}
      <Typography variant="body1">
        Sign in and start managing your candidates!
      </Typography>
    </div>
  );
};
