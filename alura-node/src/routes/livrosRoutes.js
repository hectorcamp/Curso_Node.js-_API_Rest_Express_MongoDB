import express from "express";
import LivroController from "../controllers/livrosController";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)

export default router;
    