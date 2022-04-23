export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === "light"
        ? {
            main: "#224957",
          }
        : {
            main: "#ffff",
          }),
    },
    secondary: {
      ...(mode === "light"
        ? {
            main: "#ffff",
          }
        : {
            main: "#224957",
          }),
    },
    ...(mode === "light"
      ? {
          background: {
            default: "#E5E5E5",
            // paper: "#E5E5E5",
          },
        }
      : {
          background: {
            default: "#224957",
            // paper: "#224957",
          },
        }),
  },
  components: {
    ...container,
    ...signInText,
    ...textField,
    ...buttonStyles,
  },
});

// The CSS for   the div containing the sign in text, username and password text field, log in button
const container = {
  MuiContainer: {
    defaultProps: {
      disableGutters: true,
    },
    variants: [
      {
        props: { id: "centered" },
        style: {
          padding: "0 10px",
          width: "22rem",
          height: "28rem",
          // backgroundColor: "red",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          textAlign: "center",
        },
      },
      {
        props: { id: "innerContainer" },
        style: {
          // backgroundColor: "blue",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "32px",
        },
      },
      {
        props: { id: "secondContainer" },
        style: {
          backgroundColor: "red",
          position: "absolute",
          bottom: "0",
          width: "100%",
        },
      },
    ],
  },
};

// The CSS for the sign in text
const signInText = {
  MuiTypography: {
    defaultProps: {
      color: "primary",
      sx: {
        fontFamily: '"Lexend Deca", sans-serif',
        fontStyle: "normal",
        fontWeight: "400",
      },
    },
    variants: [
      {
        // The CSS for the big sign in text
        props: { variant: "subtitle1" },
        style: {
          fontSize: "64px",
        },
      },
      {
        // The CSS for the sign in message
        props: { variant: "body1" },
        style: {
          lineHeight: "20px",
          paddingBottom: "20px",
          width: "max-content",
        },
      },
      {
        // The CSS for the foget password text
        props: { name: "innerContainerText" },
        style: {
          paddingBottom: "0",
        },
      },
    ],
  },
};

const textField = {
  MuiTextField: {
    defaultProps: {
      variant: "standard",
      InputProps: {
        disableUnderline: true,
      },
      InputLabelProps: {
        margin: "dense",
        color: "secondary",
        variant: 'filled',

        sx: {
          color: "#fff",
          // padding: "0 0 0 10px",
          fontSize: "15px",
          display: "flex",
          // alignSelf: "center",
        },
      },
      sx: {
        backgroundColor: "#224957",
        borderRadius: "10px",
        marginBottom: "32px",
        input: {
          color: "#fff",
          padding: "0 5px",
        },
      },
    },
  },
};

const buttonStyles = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      sx: {
        backgroundColor: "#20DF7F",
      },
    },
  },
};
