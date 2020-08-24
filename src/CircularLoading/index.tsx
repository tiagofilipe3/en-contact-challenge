import React, { useContext } from "react";
import {
  CircularProgress,
  makeStyles,
  CircularProgressProps,
} from "@material-ui/core";
import { ThemeProps } from "../types";
import ThemeContext from "../themeContext";

const circularProgressStyles = makeStyles({
  root: (props: ThemeProps) => {
    const { theme } = props;
    const { colors } = theme;

    return {
      color: colors.primary,
    };
  },
});

const CircularLoading = (props: CircularProgressProps) => {
  const { theme }: any = useContext(ThemeContext);
  const classes = circularProgressStyles({ theme });

  const { size, ...rest } = props;

  return <CircularProgress {...rest} size={size} className={classes.root} />;
};

export default CircularLoading;
