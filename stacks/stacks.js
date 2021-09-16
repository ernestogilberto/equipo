// 1.- Hacer una función que reciba como parámetros una pila, y un número.
//     La función debe retornar tantos elementos como diga el número (segundo parámetro).
// Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
// Salida: ['Manzana','Cebolla','Apio','Naranja']
//
// 2.- Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number "nuevo" y "viejo", de forma que si el segundo valor aparece en algún lugar de la pila,
// sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
//     Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]
//
// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta.
//     Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

const myFunction= (stack, number)=>{
    for (let i=0; i<number; i++){
        console.log(stack[i])
    }
}

const reemplazar=(stack, nuevo, viejo)=>{
    let cont = 0
    for(let i = stack.length-1; i >= 0;i--){
        if (stack[i]=== viejo){
            stack[i]=nuevo
            break
        }
        cont ++
    }

    while (cont>0){
        stack.pop()
        cont--
    }
    console.log(stack)
}

const recorrido = (stack)=>{
    console.log("Ida")
    for(let i = 0; i<stack.length; i++){
        console.log(stack[i])
    }

    console.log("Vuelta")
    for(let i = stack.length-1; i>=0 ; i--){
        console.log(stack[i])
    }
}

myFunction(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
recorrido(["pueblo1", "pueblo2", "destino"])
