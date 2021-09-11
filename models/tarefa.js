const mongoose = require('mongoose');

const tarefaModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String },
    prioridade: { type: String, required: true },
    situacao: { type: String, required:true },
    prazo: { type: String, required: true },
    dataCriacao: { type: String, default: Date.now},
})

const Tarefa = mongoose.model("tarefas", tarefaModel)

module.exports = Tarefa