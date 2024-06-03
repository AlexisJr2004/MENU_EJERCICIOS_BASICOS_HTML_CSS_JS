// rango = () =>{
//     let valorI= document.getElementById("valor inicial").value
//     let valorF= document.getElementById("Valor final").value
//     let arreglo=[]
//     for(valorI;valorI<valorF;valorI++)
//     arreglo.push(valorI)
//     console.log(arreglo)
// }
// rango()
//-------------------------------------------------------------------
// function divisores(numero, valorInicial) {
//     let divisores = [];
//     for (let i = valorInicial; i <= numero / 2; i++) {
//       if (numero % i === 0) {
//         divisores.push(i);
//       }
//     }
//     return divisores;
// }
// let resultado = divisores(12, 4);
// console.log(resultado);
//-------------------------------------------------------------------
// let serie = [4, 3, 2, 5];
// let resp = [];
// for (let i = 0; i < serie.length; i++) {
//   let resultado = serie[i] ** serie[i];
//   resp.push(resultado);
// }
// console.log(resp);
//-------------------------------------------------------------------
// function tablaMultiplicar(base) {
//     for (let i = 1; i <= 12; i++) {
//       let resultado = base * i;
//       console.log(`${base} * ${i} = ${resultado}`);
//     }
// }
// tablaMultiplicar(5);
//-------------------------------------------------------------------
// function operacionesConNumeros(numero, operacion) {
//     if (operacion === "digitos") {
//     // Retorna un arreglo con los digitos del número
//     let digitos = [];
//     for (let digito of numero.toString()) {
//     digitos.push(parseInt(digito));
//     }
//     return digitos;
//     } else if (operacion === "suma") {
//     // Retorna la suma de los digitos del número
//     let suma = 0;
//     for (let digito of numero.toString()) {
//     suma += parseInt(digito);
//     }
//     return suma;
//     } else if (operacion === "digitos_pares") {
//     // Retorna un arreglo con los digitos pares del número
//     let digitosPares = [];
//     for (let digito of numero.toString()) {
//     if (parseInt(digito) % 2 === 0) {
//     digitosPares.push(parseInt(digito));
//     }
//     }
//     return digitosPares;
//     } else if (operacion === "primer_digito") {
//     // Retorna el primer digito del número
//     return parseInt(numero.toString()[0]);
//     } else if (operacion === "ultimo_digito") {
//     // Retorna el último digito del número
//     return parseInt(numero.toString().slice(-1));
//     } else {
//     // Si no se reconoce la operación, retorna un mensaje de error
//     return "Operación no válida";
//     }
//     }
    
//     // Ejemplo de uso
//     let numero = 32456;
    
//     // Obtener los dígitos del número
//     console.log(operacionesConNumeros(numero, "digitos")); // [3, 2, 4, 5, 6]
    
//     // Obtener la suma de los dígitos del número
//     console.log(operacionesConNumeros(numero, "suma")); // 20
    
//     // Obtener los dígitos pares del número
//     console.log(operacionesConNumeros(numero, "digitos_pares")); // [2, 4, 6]
    
//     // Obtener el primer dígito del número
//     console.log(operacionesConNumeros(numero, "primer_digito")); // 3
    
//     // Obtener el último dígito del número
//     console.log(operacionesConNumeros(numero, "ultimo_digito")); // 6



function digito(num) {
    let digito = 0;
    let suma = 0;
    while (num > 0) {
      digito = num % 10;
      suma = suma + digito;
      num = parseInt(num / 10);
    }
    return suma;
}
// let num = 32456;
// let suma = digito(num);
// console.log(`La suma de los dígitos es: ${suma}`);

// function numeropar(num){
//     let ac=0
//     if (num % 2 == 0) {
//         ac=ac+num
//     } 
// }
// let num = 32456;
// let suma = numeropar(num);
// console.log(`Los numeros pares son: ${ac}`);


// // Definir las variables
// let base = 5;
// let exponente = 3;

// // Función para calcular la potencia
// function calcularPotencia(base, exponente) {
//   let resultado = 1;
//   let cadena = `${base}^${exponente}=`;
//   for (let i = 1; i <= exponente; i++) {
//     resultado *= base;
//     if (i < exponente) {
//       cadena += `${base}*`;
//     } else {
//       cadena += `${base}=${resultado}`;
//     }
//   }
//   return cadena;
// }
// console.log()



function sumaNumerosPerfectos(serie) {
    let numeros = serie.split(",").map(Number);
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (esNumeroPerfecto(numeros[i])) {
        suma += numeros[i];
      }
    }
    return suma;
  }
  
  function esNumeroPerfecto(num) {
    let sumDivisores = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sumDivisores += i;
      }
    }
    return sumDivisores === num;
  }

let serie = "6, 28, 496, 8128";
let resultado = sumaNumerosPerfectos(serie); // resultado será 8128
