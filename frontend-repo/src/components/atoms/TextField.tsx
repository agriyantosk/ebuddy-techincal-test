import { TextField as MUITextField, TextFieldVariants } from "@mui/material";

type TextFieldProps = {
  name: string;
  label: string;
  value: string | number;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  variant?: TextFieldVariants;
  style?: React.CSSProperties;
};

const TextField = ({
  name,
  label,
  value,
  type = "text",
  onChange,
  disabled = false,
  variant = "standard",
  style = {},
}: TextFieldProps) => {
  return (
    <MUITextField
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth
      disabled={disabled}
      variant={variant}
      style={style}
    />
  );
};

export default TextField;
