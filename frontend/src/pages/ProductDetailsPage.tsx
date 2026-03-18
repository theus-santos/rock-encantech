import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, CircularProgress, Container, Typography } from "@mui/material";
import api from "../api/axios";
import type { Product } from "../types/product";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data.data ?? response.data);
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
    <Container sx={{ mt: 4 }}>
      <Card>
        {product.image_url && (
          <CardMedia component="img" height="300" image={product.image_url} alt={product.name} />
        )}
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Price: ${product.price}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Category: {product.category?.name ?? "No category"}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}