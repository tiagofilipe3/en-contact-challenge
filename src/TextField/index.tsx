import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ThemeContext from "../themeContext";
import { ThemeProps } from "../types";

const textFieldStyles = makeStyles({
  root: (props: ThemeProps) => {
    const { theme } = props;
    const { colors } = theme;

    return {
      "& .MuiFormLabel-root": {
        color: `${colors.secondary}99`,
        fontFamily: "Lato-Light",
      },
      "& .MuiInputBase-input, & .MuiInputBase-root": {
        width: "250px",
        color: colors.secondary,
        fontFamily: "Lato-Light",
      },
      "& .MuiInput-underline": {
        "&:before": {
          borderBottom: `1px solid ${colors.secondary}`,
        },
        "&:hover:before": {
          borderBottom: `1px solid ${colors.secondary}`,
        },
        "&:after": {
          borderBottom: `1px solid ${colors.secondary}`,
        },
      },
    };
  },
});

const CustomTextField = (props: any) => {
  const { theme }: any = useContext(ThemeContext);

  const classes = textFieldStyles({ theme });

  return <TextField className={classes.root} {...props} />;
};

export default CustomTextField;
