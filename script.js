 
 // Crie um array que receba 5 itens e exiba no console.

 let carros = ["Honda","Toyota","Fiat","renault","Ford"]
 console.log(carros)



// Utilize um método para adicionar um nome ao inicio do array.

let pessoas = ["João","Maria"]
pessoas.unshift("Paulo")
console.log(pessoas)




// Utilize um método para remover o último nome do array.

let pessoas = ["Paulo","João","Maria"]
pessoas.pop()
console.log(pessoas)



// Utilize um método para adicionar dois nomes ao fim do array.

let comida = ["Arroz","Feijão"]
comida.push("Bife", "Fritas")
console.log(comida)



// Utilize um método para remover o primeiro nome do array.

let comida = ["Arroz","Feijão"]
comida.shift()
console.log(comida)




// Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
    return (a-b)
})
console.log(numbers)

