const mongoose = require('mongoose');

const tarefaModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String },
    prioridade: { type: Number, required: true },
    situacao: { type: String, required:true },
    prazo: { type: Date, required: true },
    dataCriacao: { type: Date, default: Date.now},
})

const Tarefa = mongoose.model("tarefas", tarefaModel)

module.exports = Tarefa