import { Box, Stack, Card, CardContent, CardActions } from "@mui/material";
import Button from "@/components/atoms/Button";
import TextField from "@/components/atoms/TextField";
import Typography from "@/components/atoms/Typography";
import { useState } from "react";

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
  isLoading?: boolean;
};

const LoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Card sx={{ width: "30%", mx: "auto" }}>
      <Box component="form" onSubmit={handleSubmit}>
        <CardContent>
          <Stack spacing={3}>
            <Typography
              text="Login to your account"
              variant="h5"
              align="center"
              gutterBottom
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            title={isLoading ? "Logging in..." : "Login"}
            disabled={isLoading}
            type="submit"
          />
        </CardActions>
      </Box>
    </Card>
  );
};

export default LoginForm;
