import React from "react";
import { useField } from "formik";
import CustomTextField from "../TextField";

interface FormikTextFieldProps {
  id?: string;
  label?: string;
  type?: string;
  formikKey: any;
}

const FormikTextField = ({ formikKey, ...rest }: FormikTextFieldProps) => {
  const [field, meta] = useField(formikKey);

  return (
    <CustomTextField
      {...rest}
      id={field.name}
      name={field.name}
      helperText={meta.error || ""}
      error={!!meta.error}
      value={field.value}
      onChange={field.onChange}
    />
  );
};

FormikTextField.defaultProps = {
  id: undefined,
  label: undefined,
  type: undefined,
};

export default FormikTextField;
