/* 1. Crea un programa que pregunte al usuario un número. 
Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. */

let numeroElegido = prompt('Elige un número')
let arr = []

while(numeroElegido % 5 == 0 && numeroElegido > 0){
    arr.push(numeroElegido)
    numeroElegido -= 5
}

console.log(arr)

/* 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. 
Posteriormente mostrar en consola los números del 1 hasta el 50, 
pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario. */ 

let primerNumero = prompt('Elige primer número')
let segundoNumero = prompt('Elige segundo número')
let contador = 1

while (contador <= 50){
    if (primerNumero == contador || segundoNumero == contador){
        console.log('Loteria')
    }else{
        console.log(contador)
    }
    contador++
}

/* 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. 
Para terminar el capturar el usuario debe ingresar el número 0. 
Finalmente mostrar la lista de números capturados en pantalla o en la consola. */

let usuario = parseFloat(prompt('Escribe algun caracter, escribe 0 para terminar el proceso'))
let arr2 = []
while(usuario != 0){
    if (isNaN(usuario) == false){
        arr2.push(usuario)
    }
    usuario = prompt('Escrib  e algun caracter')
}

console.log(arr2)

/* 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. 
Para terminar de capturar el usuario no debe escribir valor alguno. 
Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas. */ 

let palabras = prompt('Escribe letras o palabras')
let arr3 = []
let arr4 = []
let arr5 = []

while(palabras !== ''){
    arr4.push(palabras)
    arr5 = arr3.concat(arr4)
    palabras = prompt('Escribe letras o palabras')
}

console.log(arr5)

/* 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. 
Y seguirá pidiendo al usuario introducir otro día. 
En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y 
terminar la captura de información. */

let diaDeLaSemana = prompt('Escribe un dia de la semana').toLocaleLowerCase()

while(diaDeLaSemana == 'lunes'){
    alert(`Que tengas un bonito ${diaDeLaSemana}`)
    diaDeLaSemana = prompt('Escribe un dia de la semana').toLocaleLowerCase()
}

while(diaDeLaSemana == 'martes'){
    alert(`Que tengas un bonito ${diaDeLaSemana}`)
    diaDeLaSemana = prompt('Escribe un dia de la semana').toLocaleLowerCase()
}

while(diaDeLaSemana == 'miercoles'){
    alert(`Que tengas un bonito ${diaDeLaSemana}`)
    diaDeLaSemana = prompt('Escribe un dia de la semana').toLocaleLowerCase()
}

while(diaDeLaSemana == 'jueves'){
    alert(`Que tengas un bonito ${diaDeLaSemana}`)
    diaDeLaSemana = prompt('Escribe un dia de la semana').toLocaleLowerCase()
}

while(diaDeLaSemana == 'viernes'){
    alert(`Que tengas un bonito ${diaDeLaSemana}`)
    diaDeLaSemana = prompt('Escribe un dia de la semana').toLocaleLowerCase()
}

while(diaDeLaSemana == 'sabado'){
    alert(`Que tengas un bonito ${diaDeLaSemana}`)
    diaDeLaSemana = prompt('Escribe un dia de la semana').toLocaleLowerCase()
}

while(diaDeLaSemana == 'domingo'){
    alert(`Ve a descansar`)
    break
}



