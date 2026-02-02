import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function MultiplyPage() {
  const [a, setA] = useState();
  const [b, setB] = useState();

  const result = useMemo(() => a + b, [a, b]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Registrar Nueva Categoría
      </Typography>
      <Typography color="text.secondary">
      Nombre:
      </Typography>

      <TextField
        label=""
        type="text"
        onChange={(e) => setA(Text(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
      <Typography color="text.secondary">
      Descripción:
      </Typography>
      
      <TextField
        label=""
        type="text"
        onChange={(e) => setB(Text(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Guardar categoria <strong>{result}</strong>
      </Typography>
    </Paper>
  );
}