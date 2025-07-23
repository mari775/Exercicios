import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.post("/usuarios", async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const novoUsuario = await prisma.usuario.create({
      data: { nome, email, senha },
    });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao criar usuário", detalhe: error });
  }
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await prisma.usuario.findUnique({
    where: { email },
  });

  if (!usuario || usuario.senha !== senha) {
    return res.status(401).json({ erro: "Email ou senha inválidos" });
  }

  res.json({ mensagem: "Login bem-sucedido", usuario });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
