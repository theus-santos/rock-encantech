import { TextField } from "@mui/material";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({ value, onChange, onSearch }: Props) {
  return (
    <TextField
      fullWidth
      label="Search products"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSearch();
        }
      }}
    />
  );
}