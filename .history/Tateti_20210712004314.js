"use strict"

    let v1,v2,v3,v4,v5,v6 = null;
    v1 = document.getElementById("11");
    v2 = document.getElementById("12");
    v3 = document.getElementById("13");
    v4 = document.getElementById("21");
    v5 = document.getElementById("22");
    v6 = document.getElementById("23");
    v7 = document.getElementById("31");
    v8 = document.getElementById("32");
    v9 = document.getElementById("33");


    let btn_jugar = document.getElementById("btn-jugar");
    btn_jugar.addEventListener('click', function(){
        jugar();
        
    });
    
    let c1,c2,c3,c4,c5,c6 = null;
    jugar();
     
        v1.addEventListener('click', function(){
            c1 = 1;
            alert("fdsgfd");
            v1.style.backgroundColor= "red"  
        })
        
        v2.addEventListener('click', function(){
            c2 = 1;
        })
        v3.addEventListener('click', function(){
            c3 = 1;
        })
        v4.addEventListener('click', function(){
            c4 = 1;
        })
        v5.addEventListener('click', function(){
            c5 = 1;
        })
        v6.addEventListener('click', function(){
            c6 = 1;
        })
        v7.addEventListener('click', function(){
            c7 = 1;
        })
        v8.addEventListener('click', function(){
            c8 = 1;
        })
        v9.addEventListener('click', function(){
            c9 = 1;
        })
        
       

        if(v1.addEventListener('click') == 0 ){
            alert("Hola");
        }
    

    function limpiarCuadros(){

    }

    function inicializar(){
        v1,v2,v3,v4,v5,v6 = 0;
    }