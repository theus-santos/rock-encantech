import { Pagination, Stack } from "@mui/material";

type Props = {
  page: number;
  count: number;
  onChange: (page: number) => void;
};

export default function PaginationBar({ page, count, onChange }: Props) {
  return (
    <Stack alignItems="center" sx={{ mt: 4 }}>
      <Pagination
        page={page}
        count={count}
        onChange={(_, value) => onChange(value)}
      />
    </Stack>
  );
}