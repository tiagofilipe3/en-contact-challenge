import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { ThemeContext, ThemeProps } from "../theme";

const buttonStyles = makeStyles({
  root: (props: ThemeProps) => {
    const { theme } = props;
    const { colors } = theme;

    return {
      width: "180px",
      borderRadius: "20px",
      color: colors.primary,
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#E5E7DA",
      },
      "&[disabled]": {
        opacity: 0.6,
      },
    };
  },
});

const CustomButton = (props: CustomButtonProps) => {
  const { theme }: any = useContext(ThemeContext);
  const { children, onClick, type, ...rest } = props;

  const classes = buttonStyles({ theme });

  return (
    <Button {...rest} onClick={onClick} className={classes.root} type={type}>
      {children}
    </Button>
  );
};

interface CustomButtonProps {
  onClick?: any;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

CustomButton.defaultProps = {
  children: undefined,
  onClick: undefined,
  disabled: false,
  type: "button",
};

export default CustomButton;
