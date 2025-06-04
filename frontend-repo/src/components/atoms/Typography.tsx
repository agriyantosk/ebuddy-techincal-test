import { Typography as MUITypography } from "@mui/material";
import { SxProps, Theme, TypographyVariant } from "@mui/material";

type TypographyProps = {
  text: string;
  variant?: TypographyVariant;
  component?: React.ElementType;
  color?: string;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  gutterBottom?: boolean;
  sx?: SxProps<Theme>;
  style?: React.CSSProperties;
};

const Typography = ({
  text,
  variant = "body1",
  component = "p",
  color = "inherit",
  align = "inherit",
  gutterBottom = false,
  sx = {},
  style = {},
}: TypographyProps) => {
  return (
    <MUITypography
      variant={variant}
      component={component}
      color={color}
      align={align}
      gutterBottom={gutterBottom}
      sx={sx}
      style={style}
    >
      {text}
    </MUITypography>
  );
};

export default Typography;
