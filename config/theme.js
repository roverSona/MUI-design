import { createTheme } from "@mui/material/styles";

// import { alpha } from '@material-ui/core/styles/colorManipulator';

export const colors = {
  pine: "#1A7D7D",
  brick: "#ba3d54",
  plum: "#9000D3",
  peach: "#FB9D9D",
  bananaCreme: "#FFE6BA",
  navy: "#234561",
  white: "#FFFFFF",
  black: "#000000",
  pink: "#F7E6FF",
  hoverGrey: "#F0F0F0",
};
export const allColors = {
  primary: {
    main: colors.pine,
  },
  error: {
    main: colors.brick,
  },
  secondary: {
    main: colors.plum,
  },
  warning: {
    main: colors.peach,
  },
  info: {
    main: colors.bananaCreme,
  },
  success: {
    main: colors.navy,
  },
  black: {
    main: colors.black,
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.pine,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: colors.plum,
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    error: {
      main: colors.brick,
    },
    warning: {
      main: colors.peach,
    },
    info: {
      main: colors.bananaCreme,
    },
    success: {
      main: colors.navy,
    },
    dark: {
      main: colors.black,
    },
    light: {
      main: colors.white,
    },
    hoverGrey: {
      main: colors.hoverGrey,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ['"Nunito Sans"', "sans-serif"].join(","),
    h1: {
      fontSize: "2.125rem",
      fontWeight: 700,
      lineHeight: 1.36,
      "@media (max-width: 990px)": {
        fontSize: "1.5rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.38,
      "@media (max-width: 990px)": {
        fontSize: "1.25rem",
      },
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 700,
      lineHeight: 1.534,
    },
    span: {
      fontWeight: 400,
      fontSize: "0.825rem",
    },
    body2: {
      "&.strong": {
        fontWeight: 700,
      },
    },
  },
  components: {
    // Name of the component
    MuiFormControl: {
      defaultProps: {
        // The props to change the default for.
        fullWidth: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.black,
          fontSize: "0.875rem",
          lineHeight: "1.188rem",
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        // The props to change the default for.
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          // Some CSS
          border: "none",
          borderRadius: "10px",
          "& $notchedOutline": {
            borderColor: "transparent",
          },
        },
        input: {
          border: "2px solid #000000",
          padding: "0px 12px",
          borderRadius: "10px",
          height: "31px",
        },
        // formControl : {
        //   width:'100%'
        // }
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "1.25rem",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          fontWeight: 700,
          lineHeight: 1.38,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          height: "31px",
          minWidth: "110px",
          // padding: 0,
          // '@media (max-width: 990px)': {
          //   marginRight: '10px',
          //   marginTop: '20px',
          //   marginBottom: 0
          // },
          i: {
            marginRight: "10px",
          },
        },
      },
    },
    // MuiFormHelperText: {
    //   styleOverrides: {
    //     root: {
    //       color: allcolors.error.main
    //     },
    //   },
    // },
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
        width: "80%",
      },
      editor: {
        borderBottom: "1px solid gray",
      },
    },
  },
});
export default theme;
