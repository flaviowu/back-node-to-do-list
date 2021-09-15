if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const Conn = require("./models/conn/conn");
const cors = require('cors');
const port = 3005;
const server = express();
server.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

server.use(cors());

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

server.get("/", (req, res) => {
  res.send("Servidor OK!!");
});

const tarefa = require("./routers/tarefas.routes");
server.use("/tarefas", tarefa);

app.listen(process.env.PORT || port, ()=> {
  console.info(`Servidor rodando na porta ${port}`);
})