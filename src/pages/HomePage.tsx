import { Box, Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
      Bienvenido a la Gestión de Categorías
      </Typography>

      <Typography color="text.secondary">
      Sistema para listar, crear categorías y realizar cálculos geométricos.
      </Typography>

      <Typography sx={{ mt: 2 }}>
      <center>
        <img src="https://fastly.picsum.photos/id/1060/800/300.jpg?hmac=Ul1hM6d2ZnlsATmBJPksBo_mOUGLkhUJB1EHdb3OYlY" alt="" />
      </center>
      <Typography color="text.secondary">
      Listado de Categorías Se llena dinámicamente con personajes de Star Wars.
      </Typography>
      <Typography color="text.secondary">
      Crear Categoría
      Registro dinámico con validación y alerta.
      </Typography>
      <Typography color="text.secondary">
      Cálculos Básicos Áreas geométricas simples.
      </Typography>
            
      </Typography>
      <Typography sx={{p: 3, borderRadius: 3 }}>
        © 2025 - Sistema de Productos - Taller Académico
      </Typography>
    </Paper>

  );
}
