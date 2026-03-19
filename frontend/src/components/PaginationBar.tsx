import { Pagination, Stack, Box } from "@mui/material";

type Props = {
  page: number;
  count: number;
  onChange: (page: number) => void;
};

export default function PaginationBar({ page, count, onChange }: Props) {
  return (
    <Box
      sx={{
        mt: 6,
        mb: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "#1E1E1E",
          padding: "10px 16px",
          borderRadius: "12px",
        }}
      >
        <Pagination
          page={page}
          count={count}
          onChange={(_, value) => onChange(value)}
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#fff",
              borderColor: "#444",
            },

            "& .Mui-selected": {
              backgroundColor: "#FFD600 !important",
              color: "#000",
              fontWeight: 600,
            },

            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#333",
            },
          }}
        />
      </Stack>
    </Box>
  );
}