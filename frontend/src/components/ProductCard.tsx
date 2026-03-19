import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Product } from "../types/product";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import defaultImg from "../assets/default-product.jpg";

type Props = {
  product: Product;
  onDelete?: (id: number) => void;
};

export default function ProductCard({ product, onDelete }: Props) {
  const token = localStorage.getItem("token");
  const [openDialog, setOpenDialog] = useState(false);

  const [imgSrc, setImgSrc] = useState(
    product.image_url || defaultImg
  );

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        transition: "0.3s",
        backgroundColor: "#1E1E1E",
        color: "#fff",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imgSrc}
        alt={product.name}
        onError={() => setImgSrc(defaultImg)} 
      />

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} noWrap>
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            opacity: 0.7,
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </Typography>

        <Typography variant="body2" fontWeight={600}>
          ${product.price}
        </Typography>

        <Typography variant="caption" sx={{ opacity: 0.6 }}>
          {product.category?.name ?? "No category"}
        </Typography>
      </CardContent>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
          px: 1.5,
          pb: 1,
        }}
      >
        <Tooltip title="View details">
          <IconButton
            size="small"
            component={Link}
            to={`/products/${product.id}`}
            sx={{
              color: "#fff",
              "&:hover": {
                backgroundColor: "rgba(255, 214, 0, 0.1)",
                transform: "scale(1.1)",
              },
            }}
          >
            <VisibilityIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        {token && (
          <>
            <Tooltip title="Edit">
              <IconButton
                size="small"
                component={Link}
                to={`/products/${product.id}/edit`}
                sx={{
                  color: "#FFD600",
                  "&:hover": {
                    backgroundColor: "rgba(255, 214, 0, 0.1)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton
                size="small"
                onClick={() => setOpenDialog(true)}
                sx={{
                  color: "#ff4d4f",
                  "&:hover": {
                    backgroundColor: "rgba(255, 77, 79, 0.1)",
                  },
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Box>

      <ConfirmDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={() => {
          onDelete?.(product.id);
          setOpenDialog(false);
        }}
        title="Delete product"
        description="Are you sure you want to delete this product? This action cannot be undone."
      />
    </Card>
  );
}