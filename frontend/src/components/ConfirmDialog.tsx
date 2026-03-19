import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

type Props = {
  open: boolean;
  title?: string;
  description?: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConfirmDialog({
  open,
  title = "Confirm action",
  description = "Are you sure you want to continue?",
  onClose,
  onConfirm,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "#1E1E1E",
          color: "#fff",
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 600 }}>
        {title}
      </DialogTitle>

      <DialogContent>
        <Typography sx={{ opacity: 0.8 }}>
          {description}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={onClose}
          sx={{
            color: "#aaa",
            textTransform: "none",
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={onConfirm}
          sx={{
            backgroundColor: "#ff4d4f",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#d9363e",
            },
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}