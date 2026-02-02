import { Paper, Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Registrar Nueva Categoría
      </Typography>
      <Typography color="text.secondary">
      Nombre:
      </Typography>            
      <Typography color="text.secondary">
      Descripción:
      </Typography>
    </Paper>
  );
}   

