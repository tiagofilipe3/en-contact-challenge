import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext, ThemeProps } from "../theme";

export interface TextFieldProps {
  id?: string;
  label?: string;
  type?: string;
}

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

const CustomTextField = (props: TextFieldProps) => {
  const { theme } = useContext(ThemeContext);

  const classes = textFieldStyles({ theme });

  return <TextField {...props} className={classes.root} />;
};

export default CustomTextField;
