import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GridMiembros } from "./grid-miembros/grid-miembros";
import { MiembroDetalle } from "./detalle-miembro";

export const Rutas: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GridMiembros />} />
                <Route path="/detalle/:id" element={<MiembroDetalle />} />
            </Routes>
        </Router>
    );
};

