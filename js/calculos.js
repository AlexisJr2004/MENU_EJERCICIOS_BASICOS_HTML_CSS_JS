class Calculo{
    divisor(){
        let digito = parseInt(document.getElementById("num1").value);
        let vinicial = parseInt(document.getElementById("num2").value);
        let resp=document.getElementById("resp")
        let ac=0
        while (vinicial < digito) {
            if (digito % vinicial == 0) {
                ac=ac+vinicial
            } 
            vinicial=vinicial+1
            resp.textContent = `La suma de los divisores tomando en cuenta el valor inicial es: ${ac}`
        }
    }

    
    digito(){
        let digito = parseInt(document.getElementById("suma").value);
        let digit1=0,suma=0,c=0
        let $resp=document.getElementById("resp")
        while (digito>0) {
            digit1=digito % 10
            digito=parseInt(digito/10)
            suma=suma+digit1
            c=c+1
            $resp.textContent = `La suma de los dígitos es:  ${suma}`
        }
    }

    obtenerDigitos1 =(i, numero) => { 
        let arreglo = [];
        let num, aq 
        let $resp = document.getElementById("resp");
        if(i==1){
            num = numero
            // numero = 1234
            while (num > 0) {
                let digito = num % 10, aq=3
                arreglo.unshift(this.factorial(aq,digito));
                num = Math.floor(num / 10);
            }
            let resultado = arreglo.join(", ");
              
            $resp.textContent = `Los dígitos son: [${resultado}]`;
            return resultado
        }
        
    }


    tablaMultiplicar() {
        let base = parseInt(document.getElementById("base").value);
        let $resp = document.getElementById("resp");
        let resultados = "";
        for (let i = 1; i <= 12; i++) {
          let resultado = base * i;
          resultados += `${base} * ${i} = ${resultado}\n`;
        }
        $resp.textContent = resultados;
    }
    
    arrdivisores() {
        let numero = parseInt(document.getElementById("num1").value);
        let valorInicial = parseInt(document.getElementById("num2").value);
        let $resp = document.getElementById("resp");
        let divisores = [];
        for (let i = valorInicial; i <= numero / 2; i++) {
          if (numero % i === 0) {
            divisores.push(i);
          }
        }
        $resp.textContent = `Los divisores del número ingresado tomando en cuenta el valor inicial son: `+ divisores.join(', '); // convierte el array en una cadena separada por comas
    }
     
    exponente() {
        let serie = document.getElementById("serie").value.split(',');
        let $resp = document.getElementById("resp");
        let resp = [];
        for (let i = 0; i < serie.length; i++) {
          let resultado = serie[i] ** serie[i];
          resp.push(resultado);
        }
        $resp.textContent = `La respuesta de los numeros ingresados, elevados a si mismo es: `+resp.join(', '); // convierte el arreglo a una cadena separada por comas
    }

    
    sumarNumerosPerfectos() {
        let serie = document.getElementById("serie").value.split(',');
        let $resp = document.getElementById("resp");
        let suma = 0;
      
        for (let i = 0; i < serie.length; i++) {
          let num = parseInt(serie[i]);
          let sumDiv = 0;
      
          for (let j = 1; j < num; j++) {
            if (num % j === 0) {
              sumDiv += j;
            }
          }
      
          if (sumDiv === num) {
            suma += num;
          }
        }
      
        $resp.innerHTML = `La suma de los números perfectos en la serie es: ${suma}`;
      }
      
      




    digitoPares = () => {
        let numero    = document.getElementById('digito').value
        let digitos   = numero.toString().split('');
        let digitosPares = []
        let respuesta = document.getElementById('resp')
        if(isNaN(numero) == false){
            for (let i = 0; i < digitos.length; i++) {
                if (digitos[i] % 2 === 0) {
                    digitosPares.push(parseInt(digitos[i]));
                }
            }
        }else{
            respuesta.value = 'ERROR, se ha ingresado letras'
        }
        respuesta.textContent = `Digitos Pares : ${digitosPares}`;
    }
    primeroDigito = () => {
        let numero    = document.getElementById('primer').value;
        let primerDigito;
        let respuesta = document.getElementById('resp')
        if(isNaN(numero) == false ){
            while(numero >= 10 ){
                numero = Math.floor(numero/10)
            }
            primerDigito = numero;
            respuesta.textContent = `El Primero Digito es : ${primerDigito}`;
            console.log(primerDigito);
        }else{
            respuesta.value = 'ERROR, se ha ingresado letras'
        }
    }

    ultimoDigito = () => {
        let numero    = document.getElementById('ultimo').value;
        let respuesta = document.getElementById('resp')
        let ultimo;
        if(isNaN(numero) == false){
            ultimo = numero % 10 ;
            respuesta.textContent = `El Ultimo Digito es : ${ultimo}`;
            console.log(ultimo);
        }else{
            respuesta.value = 'ERROR, se ha ingresado letras'
        }
    }

    //REUTILIZACION DE CODIGO PARA EJERCICIO 13-14-15
    factorial = (aq, digito) => {
        let c, numero
        let aux=1
        let respuesta = document.getElementById('resp')
        if(aq==3){
            numero=digito
        }else{
            numero = document.getElementById("factor").value
        }
        for(c=1;c<=numero;c++){
            aux=aux*c
            }
            respuesta.textContent=`El factorial de: ${numero} es: ${aux}`
    return aux
    }

    arregloFactorial = () => {
        let resp = document.getElementById("resp")
        let numero = parseInt(document.getElementById("arreglo").value)
        let i=1
        resp.textContent = (this.obtenerDigitos1(i,numero))
    }

    obtenerDigitos1 =(i, numero) => { 
        let arreglo = [];
        let num, aq 
        let $resp = document.getElementById("resp");
        if(i==1){
            num = numero
            // numero = 1234
            while (num > 0) {
                let digito = num % 10, aq=3
                arreglo.unshift(this.factorial(aq,digito));
                num = Math.floor(num / 10);
            }
            let resultado = arreglo.join(", ");
              
            $resp.textContent = `Los dígitos son: [${resultado}]`;
            return resultado
        }
        
        else{
            num = parseInt (document.getElementById("num1").value) 
            while (num > 0) {
                let digito = num % 10;
                arreglo.unshift(digito);
                num = Math.floor(num / 10);
            }
            let resultado = arreglo.join(", ");
              
            $resp.textContent = `Los dígitos son: [${resultado}]`;
            return resultado
        }
    }

    rango = () =>{
        let valorI= document.getElementById("valorInicial").value
        let valorF= document.getElementById("ValorFinal").value
        let resp = document.getElementById("resp")
        let arreglo=[]
        for(valorI;valorI<valorF;valorI++)
        arreglo.push(valorI)
        resp.textContent=`Los números que se encuentran en el rango establecido son: [`+ arreglo +`]`
    }

    esPrimo(numero) {
        if (numero <= 1) return false;
        if (numero <= 3) return true;

        if (numero % 2 === 0 || numero % 3 === 0) return false;

        for (let i = 5; i * i <= numero; i = i + 6) {
            if (numero % i === 0 || numero % (i + 2) === 0) return false;
        }

        return true;
    }

    serieNumerosPrimos() {
        let serie = document.getElementById("serie").value.split(',');
        let $resp = document.getElementById("resp");
        let primos = [];

        for (let i = 0; i < serie.length; i++) {
            let num = parseInt(serie[i]);
            if (this.esPrimo(num)) {
                primos.push(num);
            }
        }

        $resp.textContent = `Los números primos en la serie son: ${primos.join(', ')}`;
    }

    exponente() {
        let serie = document.getElementById("serie").value.split(',');
        let $resp = document.getElementById("resp");
        let resp = [];

        for (let i = 0; i < serie.length; i++) {
            let num = parseInt(serie[i]);
            let exponente = Math.pow(num, num);
            resp.push(exponente);
        }

        $resp.textContent = `El resultado de elevar cada número a sí mismo es: ${resp.join(', ')}`;
    }
}





let cal = new Calculo()
cal.digitoPares()
cal.exponente()
cal.serieNumerosPrimos();
cal.primeroDigito()
cal.ultimoDigito()
cal.divisor()
cal.digito()
cal.obtenerDigitos1()
cal.tablaMultiplicar()
cal.arrdivisores()
cal.exponente()
cal.factorial()
cal.rango()
cal.arregloFactorial()
cal.sumarNumerosPerfectos()