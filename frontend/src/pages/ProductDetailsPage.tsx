import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import api from "../api/axios";
import type { Product } from "../types/product";
import defaultImg from "../assets/default-product.jpg";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [imgSrc, setImgSrc] = useState(defaultImg);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((response) => {
        const data = response.data.data ?? response.data;
        setProduct(data);
        setImgSrc(data.image_url || defaultImg);
      })
      .catch((error) => {
        console.error("Error fetching product details", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return <Container sx={{ mt: 4 }}>Product not found.</Container>;
  }

  return (
    <Container sx={{ mt: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <Button
          onClick={() => navigate(-1)}
          sx={{ minWidth: "auto", color: "#fff" }}
        >
          <ArrowBackIcon />
        </Button>

        <Typography variant="h5" sx={{ color: "#fff", fontWeight: 600 }}>
          Product Details
        </Typography>
      </Box>

      <Card
        sx={{
          maxWidth: 800,
          margin: "0 auto",
          borderRadius: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={imgSrc}
          alt={product.name}
          onError={() => setImgSrc(defaultImg)}
          sx={{
            width: { md: 300 },
            height: { xs: 220, md: "auto" },
            objectFit: "cover",
            backgroundColor: "#f0f0f0",
          }}
        />

        <CardContent sx={{ flex: 1, p: 3 }}>
          <Typography variant="h5" fontWeight={600}>
            {product.name}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>
            {product.description}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
            ${product.price}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, opacity: 0.6 }}>
            {product.category?.name ?? "No category"}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}