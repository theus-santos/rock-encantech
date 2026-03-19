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
      placeholder="Search products"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSearch();
        }
      }}
      variant="outlined"
      size="medium"
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#fff",
          borderRadius: "10px",
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
    }}
    />
  );
}