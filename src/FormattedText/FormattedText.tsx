import React, { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import Text from "../Text";
import { TextProps } from "../types";

interface FormattedTextProps extends TextProps {
  textId: string;
}

const FormattedText: FunctionComponent<FormattedTextProps> = ({
  textId,
  ...rest
}) => {
  return (
    <Text {...rest}>
      <FormattedMessage id={textId} />
    </Text>
  );
};

FormattedText.propTypes = {
  textId: PropTypes.string.isRequired,
};

export default FormattedText;
