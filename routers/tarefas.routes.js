const express = require("express");
const router = express.Router();
const Tarefa = require("../models/tarefa");
const ordenar = require("../modules/sort");

router.get("/", async (req, res) => {
  await Tarefa.find({})
    .then((tarefa) => {
      res.status(200).send(tarefa);
    })
    .catch((err) => {
      res
        .status(400)
        .send("Não foi possível fazer sua requisição. Tente novamente.");
      console.error(err);
    });
});

router.get("/sortByPrioridade", async (req, res) => {
  await Tarefa.find({})
    .then((tarefa) => {
      tarefa = ordenar.porPrioridade(tarefa);
      res.status(200).send(tarefa);
    })
    .catch((err) => {
      res
        .status(400)
        .send("Não foi possível fazer sua requisição. Tente novamente.");
      console.error(err);
    });
});

router.get("/sortByPrazo", async (req, res) => {
  await Tarefa.find({})
    .then((tarefa) => {
      tarefa = ordenar.porPrazo(tarefa);
      res.status(200).send(tarefa);
    })
    .catch((err) => {
      res
        .status(400)
        .send("Não foi possível fazer sua requisição. Tente novamente.");
      console.error(err);
    });
});

router.get("/:id", async (req, res) => {
  await Tarefa.findOne({ _id: req.params.id })
    .then((tarefa) => {
      res.status(200).send(tarefa);
    })
    .catch((err) => {
      res
        .status(400)
        .send(
          "Não foi possível fazer sua requisição. Verifique o ID da tarefa e tente novamente."
        );
      console.error(err);
    });
});

router.post("/add", async (req, res) => {
  await Tarefa.create(req.body)
    .then(() => {
      res.status(200).send("Tarefa adicionada com Sucesso!");
    })
    .catch((err) => {
      res.status(400).send("Verifique a tarefa e tente novamente.");
      console.error(err);
    });
});

router.put("/update/:id", async (req, res) => {
  await Tarefa.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("Tarefa atualizada com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Algo deu errado na requisição, tente novamente");
      console.error(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
  await Tarefa.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send(`Tarefa excluída com sucesso`);
    })
    .catch((err) => {
      res.status(400).send("Algo deu errado na requisição, tente novamente");
      console.error(err);
    });
});

module.exports = router;
