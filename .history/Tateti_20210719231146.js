"use strict"

let v1, v2, v3, v4, v5, v6, v7, v8, v9;
let c1,c2,c3,c4,c5,c6,c7,c8,c9 = null;
let turno = 

    v1 = document.getElementById("_11");
    v2 = document.getElementById("_12");
    v3 = document.getElementById("_13");
    v4 = document.getElementById("_21");
    v5 = document.getElementById("_22");
    v6 = document.getElementById("_23");
    v7 = document.getElementById("_31");
    v8 = document.getElementById("_32");
    v9 = document.getElementById("_33");

    function iniciliazar (){
        v1.style.backgroundColor= "white";
        v2.style.backgroundColor= "white";
        v3.style.backgroundColor= "white";
        v4.style.backgroundColor= "white";
        v5.style.backgroundColor= "white";
        v6.style.backgroundColor= "white";
        v7.style.backgroundColor= "white";
        v8.style.backgroundColor= "white";
        v9.style.backgroundColor= "white";
        c1, c2, c3, c4, c5, c6, c7, c8, c9  = 0;
    }

    v1.addEventListener('click', function(){
        c1 = 1;
        colorTurno();
    });
    v2.addEventListener('click', function(){
        c2 = 1;
        colorTurno();
    });
    v3.addEventListener('click', function(){
        c3 = 1;
        colorTurno();
    });
    v4.addEventListener('click', function(){
        c4 = 1;
        colorTurno();
    });
    v5.addEventListener('click', function(){
        c5 = 1;
        colorTurno();
    });
    v6.addEventListener('click', function(){
        c6 = 1;
        colorTurno();
    });
    v7.addEventListener('click', function(){
        c7 = 1;
        colorTurno();
    });
    v8.addEventListener('click', function(){
        c8 = 1;
        colorTurno();
    });
    v9.addEventListener('click', function(){
        c9 = 1;
        colorTurno();
    });

function colorTurno(){
    if(turno == 0){  
        v1.style.backgroundColor= "red";
    }else if(turno == 1){
        v1.style.backgroundColor= "green";
    }
}


let boton = document.getElementById('btn-jugar');
    boton.addEventListener('click', function(){
        jugar();
    })
    
function jugar (){
    iniciliazar();
}


