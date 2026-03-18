import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from "@mui/material";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
      }}
    >
      {product.image_url && (
        <CardMedia
          component="img"
          height="180"
          image={product.image_url}
          alt={product.name}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            minHeight: 48,
          }}
        >
          {product.description}
        </Typography>

        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            ${product.price}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          Category: {product.category?.name ?? "No category"}
        </Typography>
      </CardContent>

      <CardActions>
        <Button component={Link} to={`/products/${product.id}`} size="small">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}