import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B53AD", // Example primary color
      light: "#5C73D4", // Light variant of the primary color
      dark: "#283484", // Dark variant of the primary color
    },
    secondary: {
      main: "#FF5722", // Example secondary color
      light: "#FF8A50", // Light variant of the secondary color
      dark: "#C41C00", // Dark variant of the secondary color
    },
    veryDarkGray: {
      main: "hsl(0, 0%, 17%)",
    },
    darkGray: {
      main: "hsl(0, 0%, 59%)",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F0F0F0",
    },
  },

  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem", // Default body1 font size
    },
    body2: {
      fontSize: "0.875rem", // Default body2 font size
    },
    button: {
      textTransform: "none", // Prevents uppercase transformation
    },
  },

  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: "black",
          border: "1px solid #3B53AD",
          borderRadius: "4px",
          margin: "0px",
          padding: "8px",
          boxShadow: "0px 0px 0px 0px",
          "&:before": {
            border: "none",
          },
          "&:hover:not(.Mui-disabled):before": {
            border: "none",
          },
          "&.Mui-focused:before": {
            border: "none",
          },
          "&.Mui-focused:after": {
            border: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 16, // Customize the padding for Paper components
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "18px", // Customize the font size for text input
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 375, // Mobile design width
      md: 960,
      lg: 1280,
      xl: 1440, // Desktop design width
    },
  },
});

export default theme;
