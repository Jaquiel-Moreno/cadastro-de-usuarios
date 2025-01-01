## CRIANDO API    

  1 - npm -y  (cria a api, responde todas as pegunta com sim)       
  2 - express npm i express (instala a biblioteca)
  
  3 - importa bibioteca express   
  4 - passar o express em uma função (const app = express())  
      para ter acesso as funcionalidades do express   

  ## CRIANDO A ROTAS  
  1 Rota comunicação entre frontend e backend 

    Tipos de routs 
      http            métodos 
      GET      ====>  LISTAR
      POST     ====>  CRIAR
      PUT      ====>  EDITAR VÁRIOS
      PATCH    ====>  EDITAR UM
      DELETE   ====>  DELATAR 

    Endereço 
     app.get('/users')  
     app.post('/users') 
     app.put('/users')
     app.patch('/users')  
     app.delete('/users')
## startar servidor ao alterar codigo 
      node --watch server.js
     http://localhost:3000/users

## RODAR O SERVIDOR 
     node server.js 

 ### HTTP STATUS 

   CÓDIGOS 
   2XX sucesso
   4xx erro cliente
   5xx erro servidor
 

### USER MONGO DB
  

  mudar o ip para todos network acess
## PRISMA DEFINIÇÃO

O Prisma é uma ferramenta de mapeamento objeto-relacional (ORM) que permite aproximar o paradigma de desenvolvimento orientado a objetos ao paradigma do banco de dados. Ele permite gerenciar facilmente um banco de dados utilizando uma linguagem de consulta simples e intuitiva chamada Prisma Schema.
 ## INSTALL PRISMA.IO 

 npm install prisma --save-dev
      
## Update the Prisma schema
Open the prisma/schema.prisma file and replace the default contents with the following:

prisma/schema.prisma
datasource db {
provider = "mongodb"
url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Post {
  id       String    @id @default(auto()) @map("_id") @db.ObjectId
  slug     String    @unique
  title    String
  body     String
  author   User      @relation(fields: [authorId], references: [id])
  authorId String    @db.ObjectId
  comments Comment[]
}

model User {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  email   String   @unique
  name    String?
  address Address?
  posts   Post[]
}

model Comment {
  id      String @id @default(auto()) @map("_id") @db.ObjectId
  comment String
  post    Post   @relation(fields: [postId], references: [id])
  postId  String @db.ObjectId
}

// Address is an embedded document
type Address {
  street String
  city   String
  state  String
  zip    String
}


## INSTALAR PRISMA CLIENT 

npm install @prisma/client


### COMANDO PARA AVISAR A BANCO QUE JÁ ESTÁ TUDO CONFIGURADO

npx prisma db push 

## Write your first query with Prisma Client
Now that you have generated Prisma Client, you can start writing queries to read and write data in your database. For the purpose of this guide, you'll use a plain Node.js script to explore some basic features of Prisma Client.

Create a new file named index.js and add the following code to it:


## ABRIR STUDIO USER 
npx prisma studio 


## DICAS 
 Sempre que alterar o código rode o camando de avisar o banco de dados

 npx prisma db push 

 clt + f no terminal pesquisa
 
  ### AWAIT 

  todas as funçõs async 
  app.post("/usuarios", async (req, res) => {
  
    await prisma.user.create({  
      data:{
        email: req.body.email,
        name : req.body.name,    
        age  : req.body.age
      }
    })
  }

  ## ROUTE PARAMS (GET  / PUT / DELETE )  

     Tipos de routs 
      http            métodos 
      GET      ====>  LISTAR
      POST     ====>  CRIAR
      PUT      ====>  EDITAR VÁRIOS
      PATCH    ====>  EDITAR UM
      DELETE   ====>  DELATAR
    Endereço 
     app.get('/users')  
     app.post('/users') 
     app.put('/users')
     app.patch('/users')  
     app.delete('/users') 


    1 -  buscar, deletar, oou editar algo específico  

     1.1 -  get servidor.com/usuario22      <==== ID 
     1.2 -  put servidor.com/usuario22      <==== ID 
     1.3 -  delete servidor.com/usuario22   <==== ID        


## QUERY PARAMS
Consulta, Filtros

servidor.com/usuarios?estado=bahia&cidade=salvador
servidor.com/usuarios?tipo=comedi&streming=netflix


Colocando informações no query params



 ### FORMAT CODE 
  ALT + SHIFT + F

### MODELO JSON USER

{
  "email": "mariavaldelice.moreno@outlook.com",
  "name": "Valdelice Moreno",
  "age": "58",
  "uf": "Maranhao-MA"
}
### GARANTE ATUALIZAÇÃO DO CODIGO
Regenerar o Cliente : Após qualquer alteração no modelo Prisma,   
execute 
 npx prisma generate  
 para garantir que as alterações sejam refletidas no cliente. 


  

  ### COMANDO PARA RETORNAR A BRANCH ATUAL
  git checkout feature