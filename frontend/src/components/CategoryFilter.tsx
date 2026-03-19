import { FormControl, MenuItem, Select } from "@mui/material";
import type { Category } from "../types/category";

type Props = {
  categories: Category[];
  value: string;
  onChange: (value: string) => void;
};

export default function CategoryFilter({ categories, value, onChange }: Props) {
  return (
    <FormControl fullWidth>
      <Select
        value={value}
        displayEmpty
        onChange={(e) => onChange(String(e.target.value))}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ccc",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
            borderWidth: "2px",
          },
        }}
        renderValue={(selected) => {
          if (!selected) return "Category";

          const category = categories.find(
            (item) => String(item.id) === String(selected)
          );

          return category?.name ?? "Category";
        }}
        >
        <MenuItem value="">All</MenuItem>

        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}