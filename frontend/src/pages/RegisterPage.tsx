import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import type { AuthResponse } from "../types/auth";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post<AuthResponse>("/register", form);
      localStorage.setItem("token", response.data.data.token);
      navigate("/");
    } catch {
      setError("Could not register user");
    }
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      borderRadius: "10px",
      color: "#000",

      "& fieldset": {
        borderColor: "#000",
      },

      "&:hover fieldset": {
        borderColor: "#000",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#000",
        borderWidth: "2px",
      },
    },
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Box
        sx={{
          backgroundColor: "#1E1E1E",
          p: 4,
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            color: "#fff",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Create Account
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit}>
          
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: "#fff", mb: 0.5 }}>
              Name
            </Typography>
            <TextField
              fullWidth
              value={form.name}
              sx={inputStyle}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: "#fff", mb: 0.5 }}>
              Email
            </Typography>
            <TextField
              fullWidth
              value={form.email}
              sx={inputStyle}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ color: "#fff", mb: 0.5 }}>
              Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              value={form.password}
              sx={inputStyle}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#FFD600",
              color: "#000",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#e6c200",
              },
            }}
          >
            Register
          </Button>
        </Box>

        <Typography
          sx={{
            mt: 2,
            color: "#aaa",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          Already have an account?{" "}
          <Box
            component={Link}
            to="/login"
            sx={{
              color: "#FFD600",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Login
          </Box>
        </Typography>
      </Box>
    </Container>
  );
}