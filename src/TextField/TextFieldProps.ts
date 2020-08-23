export default interface TextFieldProps {
  id?: string;
  label?: string;
  type?: string;
  name?: string;
  helperText?: string;
  error?: boolean;
  value?: string;
  onChange?: void;
}
