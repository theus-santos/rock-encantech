import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo_rockencantech-1.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const navButtonStyle = {
    color: "#fff",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 500,
     "&:hover": {
      color: "#FFD600",
    },
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        width: "100%",
        height: "110px",
        display: "flex",
        gap: "70px",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "110px !important",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 6 },
        }}
      >
        <Box
          component="a"
          href="https://rockencantech.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component="img"
            src={logo}
            alt="RockEncantech"
            sx={{
              height: 56,
              width: "auto",
              cursor: "pointer",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button component={Link} to="/" sx={navButtonStyle}>
            Products
          </Button>

          {!isAuthenticated ? (
            <>
              <Button component={Link} to="/login" sx={navButtonStyle}>
                Login
              </Button>

              <Button component={Link} to="/register" sx={navButtonStyle}>
                Register
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/create-product"
                sx={navButtonStyle}
              >
                Create Product
              </Button>

              <Button
                onClick={handleLogout}
                sx={{
                  border: "1px solid #FFD600",
                  color: "#FFD600",
                  borderRadius: "999px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#FFD600",
                    color: "#000",
                  },
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}