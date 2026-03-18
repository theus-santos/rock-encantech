import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { Category } from "../types/category";

type Props = {
  categories: Category[];
  value: string;
  onChange: (value: string) => void;
};

export default function CategoryFilter({ categories, value, onChange }: Props) {
  return (
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select
        value={value}
        label="Category"
        onChange={(e) => onChange(String(e.target.value))}
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