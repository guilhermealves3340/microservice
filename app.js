const express = require("express");
const bodyParser = require("body-parser");

const router = require("./router/index");
const port = 3000;

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router.home);
app.use("/aluno", router.aluno);
app.use("/disciplina", router.disciplina);
app.use("/professor", router.professor);


app.listen(port, () => {
  console.log("RUN SERVER IN PORT http://localhost:"+port+"/");
});
