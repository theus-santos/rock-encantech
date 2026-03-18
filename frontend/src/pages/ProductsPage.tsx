import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Container, Grid, Typography } from "@mui/material";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import PaginationBar from "../components/PaginationBar";
import type { Product, ProductsResponse } from "../types/product";
import type { Category } from "../types/category";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (pageOverride?: number) => {
    try {
      setLoading(true);

      const params: Record<string, string | number> = {
        page: pageOverride ?? page,
      };

      if (search) params.search = search;
      if (selectedCategory) params.category = selectedCategory;

      const response = await api.get<ProductsResponse>("/products", { params });

      setProducts(response.data.data);
      setLastPage(response.data.meta.last_page);
    } catch (error) {
        console.error("Error fetching products", error);
    } finally {
        setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data.data ?? response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [page, selectedCategory]);

  const handleSearch = () => {
    setPage(1);
    fetchProducts(1);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Products
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SearchBar
            value={search}
            onChange={setSearch}
            onSearch={handleSearch}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <CategoryFilter
            categories={categories}
            value={selectedCategory}
            onChange={(value) => {
              setSelectedCategory(value);
              setPage(1);
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
          <Button fullWidth variant="contained" sx={{ height: "100%" }} onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          <PaginationBar page={page} count={lastPage} onChange={setPage} />
        </>
      )}
    </Container>
  );
}