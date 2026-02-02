import { Paper, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Información del Sistema
      </Typography>

      <Typography color="text.secondary">
      Sistema académico para practicar consumo de APIs públicas, renderizado dinámico y lógica de programación base, ideal para migrar posteriormente a ReactJS.
      </Typography>
      <center>
        <img src="https://fastly.picsum.photos/id/970/1200/500.jpg?hmac=RjoA2ETCPtjTqQtQnjY7hDHCaI4qSF8WicNH44QyFcA" alt="" />
      </center>
      <Typography sx={{ mt: 2 }}>
        
      </Typography>
    </Paper>
  );
}