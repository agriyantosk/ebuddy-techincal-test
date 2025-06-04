import { Button as MUIButton } from "@mui/material";

type ButtonProps = {
  title: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
};

const Button = ({
  title,
  color = "primary",
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <MUIButton
      variant="contained"
      color={color}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {title}
    </MUIButton>
  );
};

export default Button;
