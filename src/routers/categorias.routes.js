import express from "express";
import { obtenerCategorias } from "../controllers/categoria.controller.js";

const router = express.Router();

router.get("/all", obtenerCategorias);

export default router;