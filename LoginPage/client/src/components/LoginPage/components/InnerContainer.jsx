import React from "react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";

export const InnerContainer = () => {
  return (
    // The div vointaing the checkbox and forgot password text
    <Container id="innerContainer">
      {/* The checkbox */}
      <FormControlLabel
        control={
          <CheckBox
            sx={{
              color: "primary.main",
              "&.Mui-checked": { color: "primary" },
            }}
          />
        }
        label={
          <Typography
            name="innerContainerText"
            sx={{
              color: "primary.main",
              display: "flex",
              alignSelf: "center",
            }}
          >
            Remeber me
          </Typography>
        }
      />
      {/* The forgot password text */}
      <Typography
        name="innerContainerText"
        sx={{ display: "flex", alignSelf: "center" }}
      >
        Forgot password?
      </Typography>
    </Container>
  );
};
