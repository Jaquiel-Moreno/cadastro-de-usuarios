
import cors from 'cors'
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.use(express.json())
app.use(cors())
//criar um usuário
app.post("/usuarios", async (req, res) => {

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)


})

//editar usuário update
app.put("/usuarios/:id", async (req, res) => {

  await prisma.user.update({

    where: {
      id: req.params.id

    },


    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)


})

//deletar usuários
app.delete("/usuarios/:id", async (req, res) => {

  await prisma.user.delete({

    where: {
      id: req.params.id

    }

  })

  res.status(200).json({ message: "User Deletado com Sucesso" })


})

//lista usuários, filtrar consulta
app.get("/usuarios", async (req, res) => {
  let users = [];
  if (req.query) {

    users = await prisma.user.findMany({
      where: {
        email: req.query.email,
        name : req.query.name,
        age  : req.query.age

      }
    })

  } else {
    const users = await prisma.user.findMany()
  }


  res.status(200).json(users)
})


app.listen(3000)