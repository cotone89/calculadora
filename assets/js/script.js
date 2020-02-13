var oper = "";
var oper1 = "";
var oper2 = "";
var operacion=""
window.onload = function () {
    limpiaPantalla();
    console.log("cargamos");
    var resultado = 0;
    document.getElementById("caja-resultado").innerHTML = resultado;
    
    document.getElementById("1").onclick = function () {
        oper = oper + "1";
        document.getElementById("caja-resultado").innerHTML = oper;
    }
    document.getElementById("2").onclick = function () {
        oper = oper + "2";
        document.getElementById("caja-resultado").innerHTML = oper;
    }
    document.getElementById("3").onclick = function () {
        oper = oper + "3";
        document.getElementById("caja-resultado").innerHTML = oper;     
    }
    document.getElementById("4").onclick = function () {
        oper = oper + "4";
        document.getElementById("caja-resultado").innerHTML = oper;      
    }
    document.getElementById("5").onclick = function () {
        oper = oper + "5";
        document.getElementById("caja-resultado").innerHTML = oper;       
    }
    document.getElementById("6").onclick = function () {
        oper = oper + "6";
        document.getElementById("caja-resultado").innerHTML = oper;      
    }
    document.getElementById("7").onclick = function () {
        oper = oper + "7";
        document.getElementById("caja-resultado").innerHTML = oper;
    }
    document.getElementById("8").onclick = function () {
        oper = oper + "8";
        document.getElementById("caja-resultado").innerHTML = oper;
    }
    document.getElementById("9").onclick = function () {
        oper = oper + "9";
        document.getElementById("caja-resultado").innerHTML = oper;
    }
    document.getElementById("0").onclick = function () {
        oper = oper + "0";
        document.getElementById("caja-resultado").innerHTML = oper;
    }

    document.getElementById("suma").onclick = function () {
        oper1 = document.getElementById("caja-resultado").textContent;
        console.log("el primer operando es--> " + oper1);
        limpiaPantalla();
        document.getElementById("caja-resultado").innerHTML = "+";
        operacion = "+";       
    }
    document.getElementById("resta").onclick = function () {
        oper1 = document.getElementById("caja-resultado").textContent;
        console.log("el primer operando es--> " + oper1);
        limpiaPantalla();
        document.getElementById("caja-resultado").innerHTML = "-";
        operacion = "-";
    }
    document.getElementById("multiplicacion").onclick = function () {
        oper1 = document.getElementById("caja-resultado").textContent;
        console.log("el primer operando es--> " + oper1);
        limpiaPantalla();
        document.getElementById("caja-resultado").innerHTML = "*";
        operacion = "*";
    }
    document.getElementById("division").onclick = function () {
        oper1 = document.getElementById("caja-resultado").textContent;
        console.log("el primer operando es--> " + oper1);
        limpiaPantalla();
        document.getElementById("caja-resultado").innerHTML = "/";
        operacion = "/";
    }
    
    
};


function generaResultado() {
    console.log("entro a resultado"); 
    
    oper2 = document.getElementById("caja-resultado").textContent;
    console.log("oper2 es----- " + oper2);
    limpiaPantalla();
    realizaOperacion(oper1,oper2,operacion);  
}

function realizaOperacion(oper1,oper2,operacion) {
    var resultado = 0.0;
    var operando1 = parseFloat(oper1);
    var operando2 = parseFloat(oper2);
    console.log("oper1------> " + oper1);
    console.log("oper2------> " + oper2);
    if ("+" == operacion) {
        resultado = operando1 + operando2;
        document.getElementById("caja-resultado").innerHTML = resultado;
    } else if ("-" == operacion) {
        resultado = operando1 - operando2;
        document.getElementById("caja-resultado").innerHTML = resultado;
    } else if ("*" == operacion) {
        resultado = operando1 * operando2;
        document.getElementById("caja-resultado").innerHTML = resultado;
    } else if ("/" == operacion) {
        resultado = operando1 / operando2;
        document.getElementById("caja-resultado").innerHTML = resultado;
    } else {
        alert("Error, empieza denuevo");
        limpiaPantalla();
    }
}

function limpiaPantalla() {
    oper = "";
    document.getElementById("caja-resultado").innerHTML = "";
}




