
// //Ejercicio 1

// const opciones = ["PIEDRA", "PAPEL", "TIJERA"];

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// let jugar = true;

// while (jugar) {
//     let usuario = prompt("Juegue PIEDRA, PAPEL o TIJERA")
//     let computadora = opciones[getRandomInt(3)].toUpperCase();

//     console.log("Usuario eligió: " + usuario);
//     console.log("Computadora eligió: " + computadora);

//     if (usuario === computadora) {
//         console.log("¡ESTAMOS EMPATADOS!");
//     } else if (
//         (usuario === "PIEDRA" && computadora === "TIJERA") ||
//         (usuario === "PAPEL" && computadora === "PIEDRA") ||
//         (usuario === "TIJERA" && computadora === "PAPEL")
//     ) {
//         console.log("¡FELICIDADES... GANASTE!");
//     } else {
//         console.log("LO SIENTO... PERDISTE");
//     }

//     let respuesta = prompt("¿Quieres jugar otra vez? (SI/NO)").toUpperCase();
//     if (respuesta === "NO") {
//         jugar = false;
//         console.log("Gracias por jugar");
//     }
// }

//Ejercicio 2

const frutas = ['manzana', 'banano', 'uva', 'pera', 'sandia', 'kiwi', 'naranja'];
console.log("Frutas:", frutas);

frutas.sort()

function SingularAPlural(palabra) {
        if (palabra.endsWith("s")) {
            return palabra;
        } 
            return palabra + "s";
    
    }

console.log(SingularAPlural(frutas[3]))

const frutasPlural = [];

for (let fruta of frutas) {
    frutasPlural.push(SingularAPlural(fruta));
}

console.log("Frutas en plural:", frutasPlural);

function existeFruta(palabra) {
        return frutas.includes(palabra);
}

console.log("¿Existe mango?", existeFruta("mango")); 
console.log("¿Existe uva?", existeFruta("uva"));     

const frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas cortas (≤ 4 letras):", frutasCortas);