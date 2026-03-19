import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import api from "../api/axios";
import type { Category } from "../types/category";

export default function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "",
    image_url: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await api.get(`/products/${id}`);
        const product = productResponse.data.data ?? productResponse.data;

        setForm({
          name: product.name ?? "",
          description: product.description ?? "",
          price: product.price ?? "",
          category_id: String(product.category?.id ?? ""),
          image_url: product.image_url ?? "",
        });

        const categoriesResponse = await api.get("/categories");
        setCategories(categoriesResponse.data.data ?? categoriesResponse.data);
      } catch (err) {
        console.error(err);
        setError("Could not load product data");
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await api.put(`/products/${id}`, {
        ...form,
        price: Number(form.price),
        category_id: Number(form.category_id),
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Could not update product");
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
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <Button
          onClick={() => navigate(-1)}
          sx={{ minWidth: "auto", color: "#fff" }}
        >
          <ArrowBackIcon />
        </Button>

        <Typography
          variant="h5"
          sx={{ color: "#fff", fontWeight: 600 }}
        >
          Edit Product
        </Typography>
      </Box>

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
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ color: "#fff", mb: 0.5 }}>
            Description
          </Typography>
          <TextField
            fullWidth
            value={form.description}
            sx={inputStyle}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ color: "#fff", mb: 0.5 }}>
            Price
          </Typography>
          <TextField
            fullWidth
            type="number"
            value={form.price}
            sx={inputStyle}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ color: "#fff", mb: 0.5 }}>
            Category
          </Typography>
          <TextField
            select
            fullWidth
            value={form.category_id}
            sx={inputStyle}
            onChange={(e) =>
              setForm({ ...form, category_id: e.target.value })
            }
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ color: "#fff", mb: 0.5 }}>
            Image URL
          </Typography>
          <TextField
            fullWidth
            value={form.image_url}
            sx={inputStyle}
            onChange={(e) =>
              setForm({ ...form, image_url: e.target.value })
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
            fontSize: "16px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#e6c200",
            },
          }}
        >
          Update Product
        </Button>
      </Box>
    </Container>
  );
}