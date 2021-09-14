function porPrioridade(lista) {
  // console.log(lista)
    let listaOrdenada = lista.sort((item1, item2) => {
        // console.log([item1.prioridade, item2.prioridade])
        return item1.prioridade > item2.prioridade ? -1 : 1
    })
    return listaOrdenada
}

function porPrazo(lista) {
  let listaOrdenada = lista.sort((item1, item2) => {
    return item1.prazo > item2.prazo ? 1 : -1
  })
  return listaOrdenada
}

module.exports = {
  porPrioridade,
  porPrazo
};
// let l = [
//   { id: 1, prioridade: "alta" },
//   { id: 2, prioridade: "normal"},
//   { id: 3, prioridade:  "normal"},
//   { id: 4, prioridade: "normal" },
//   { id: 6, prioridade: "alta" },
//   { id: 5, prioridade: "baixa" },
//   { id: 8, prioridade: "alta" },
//   { id: 7, prioridade: "baixa" },
//   { id: 9, prioridade: "baixa" },
// ];

// console.log(sortByPrioridade(l));
