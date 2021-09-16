// 1. Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
// Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 1: [ amarillo, rojo, azul, morado]
// Cola 2: [rosa, verde, negro, blanco]
//
// 2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos "colados",
// es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket.
// Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
//
//     Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
//
//     Cola: [
//     { user:'User1', ticket:true },
//     { user:'User2', ticket:true },
//     { user:'User3', ticket:false },
//     { user:'User4', ticket:true },
//     { user:'User5', ticket:false },
//     { user:'User6', ticket:false },
//     { user:'User7', ticket:true },
//     { user:'User8', ticket:true },
//     { user:'User9', ticket:true },
//     { user:'User10', ticket:false },
//     { user:'User11', ticket:true },
// ];
let queue1 = []
let queue2 = []

const split = (queue)=>{
    for(let i=0; i<queue.length; i++){
        if (i%2===0){
            queue1.push(queue[i])
        }else{
            queue2.push(queue[i])
        }
    }
}

split([ "amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"])

console.log(queue1)
console.log(queue2)

let cola = [
    { user:'User1', ticket:true },
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true },
];

let retirados = []
let encolados = []

const ticket = (cola)=>{
    for(let i=0; i<cola.length; i++){
        if(cola[i].ticket){
            encolados.push(cola[i].user)
        }else{
            retirados.push(cola[i].user)
        }
    }
}

ticket(cola)

console.log(retirados)
console.log(encolados)