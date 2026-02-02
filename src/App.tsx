import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SumPage from "./pages/SumPage";
import MultiplyPage from "./pages/MultiplyPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const linkBtnSx = {
  color: "white",
  textTransform: "none",
  borderRadius: 2,
  px: 2,
  "&.active": { bgcolor: "rgba(255,255,255,.12)" },
};

export default function App() {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#343a40" }}>
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mr: 2 }}>
          Gestión de Categorías
          </Typography>

          <Button component={NavLink} to="/" end sx={linkBtnSx}>
            Home
          </Button>
          <Button component={NavLink} to="/productos" sx={linkBtnSx}>
            Productos
          </Button>
          <Button component={NavLink} to="/calculo" sx={linkBtnSx}>
            Calculo
          </Button>
          <Button component={NavLink} to="/nueva categoria" sx={linkBtnSx}>
            Nueva categoria
          </Button>
          <Button component={NavLink} to="/informacion" sx={linkBtnSx}>
            informacion
          </Button>

          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/calculo" element={<SumPage />} />
          <Route path="/nueva categoria" element={<MultiplyPage />} />
          <Route path="/informaciom" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}