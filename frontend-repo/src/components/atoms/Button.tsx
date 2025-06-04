import { Button as MUIButton } from "@mui/material";

type ButtonProps = {
  title: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  title,
  color = "primary",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <MUIButton
      variant="contained"
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </MUIButton>
  );
};

export default Button;
