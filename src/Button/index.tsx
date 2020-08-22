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
    };
  },
});

const CustomButton = (props: CustomButtonProps) => {
  const { theme } = useContext(ThemeContext);
  const { children, onClick, ...rest } = props;

  const classes = buttonStyles({ theme });

  return (
    <Button onClick={onClick} className={classes.root} {...rest}>
      {children}
    </Button>
  );
};

interface CustomButtonProps {
  onClick?: any;
  children?: React.ReactNode;
}

CustomButton.defaultProps = {
  children: undefined,
  onClick: undefined,
};

export default CustomButton;
