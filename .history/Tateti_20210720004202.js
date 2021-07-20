"use strict"

let v1, v2, v3, v4, v5, v6, v7, v8, v9;
let c1,c2,c3,c4,c5,c6,c7,c8,c9 = null;
let turno = false;

    v1 = document.getElementById("_11");
    v2 = document.getElementById("_21");
    v3 = document.getElementById("_31");
    v4 = document.getElementById("_12");
    v5 = document.getElementById("_22");
    v6 = document.getElementById("_32");
    v7 = document.getElementById("_13");
    v8 = document.getElementById("_23");
    v9 = document.getElementById("_33");

    function iniciliazar(){
        v1.style.backgroundColor= "white";
        v2.style.backgroundColor= "white";
        v3.style.backgroundColor= "white";
        v4.style.backgroundColor= "white";
        v5.style.backgroundColor= "white";
        v6.style.backgroundColor= "white";
        v7.style.backgroundColor= "white";
        v8.style.backgroundColor= "white";
        v9.style.backgroundColor= "white";

        c1, c2, c3, c4, c5, c6, c7, c8, c9  = null;

        document.getElementById("_11").disabled = false;
        document.getElementById("_21").disabled = false;
        document.getElementById("_31").disabled = false;
        document.getElementById("_12").disabled = false;
        document.getElementById("_22").disabled = false;
        document.getElementById("_32").disabled = false;
        document.getElementById("_13").disabled = false;
        document.getElementById("_23").disabled = false;
        document.getElementById("_33").disabled = false;
    }

    v1.addEventListener('click', function(){
        turnoJugar(v1);
        document.getElementById("_11").disabled = true;
        c1 = asignacionTurnoCaja(c1);      
        resultado();
    });
    v2.addEventListener('click', function(){
        turnoJugar(v2);
        document.getElementById("_21").disabled = true;
        c2 = asignacionTurnoCaja(c2); 
        resultado();
    });
    v3.addEventListener('click', function(){
        turnoJugar(v3);
        document.getElementById("_31").disabled = true;
        c3 = asignacionTurnoCaja(c3);
        resultado();
    });
    v4.addEventListener('click', function(){
        turnoJugar(v4);
        document.getElementById("_12").disabled = true;
        c4 = asignacionTurnoCaja(c4);
        resultado();
    });
    v5.addEventListener('click', function(){
        turnoJugar(v5);
        document.getElementById("_22").disabled = true;
        c5 = asignacionTurnoCaja(c5);
        resultado();
    });
    v6.addEventListener('click', function(){
        turnoJugar(v6);
        document.getElementById("_32").disabled = true;
        c6 = asignacionTurnoCaja(c6);
        resultado();
    });
    v7.addEventListener('click', function(){
        turnoJugar(v7);
        document.getElementById("_13").disabled = true;
        c7 = asignacionTurnoCaja(c7);
        resultado();
    });
    v8.addEventListener('click', function(){
        turnoJugar(v8);
        document.getElementById("_23").disabled = true;
        c8 = asignacionTurnoCaja(c8);
        resultado();
    });
    v9.addEventListener('click', function(){
        turnoJugar(v9);
        document.getElementById("_33").disabled = true;
        c9 = asignacionTurnoCaja(c9);
        resultado();
    });
   
    function asignacionTurnoCaja(casilla){    
        if(casilla == null){
            if(turno == true){
                    casilla = 0;
            }else if(turno == false){
                    casilla = 1;
            }
        }else{
            console.log("Casillero ya asignado");
        }
        return casilla;
    }

    function turnoJugar(t){
        if(turno == false){
            turno = true;
            console.log(turno);
            colorTurno(t);
        } else if(turno == true){
            turno = false;
            colorTurno(t);
        }
    }

    function colorTurno(t){
        if(turno == true){  
            t.style.backgroundColor= "red";
        }else if(turno == false){
            t.style.backgroundColor= "green";
        }
    }

function resultado(){
    if((c1==1 && c2==1 && c3==1) || 
        (c4==1 && c5==1 && c6==1) ||
         (c7==1 && c8==1 && c9==1) ||
          (c1==1 && c5==1 && c9==1) ||
           (c2==1 && c5==1 && c8==1) ||
            (c7==1 && c5==1 && c3==1) ||
             (c1==1 && c4==1 && c7==1) ||
              (c3==1 && c6==1  && c9==1)){
            alert("¡Tenemos Ganador, Ganó el color !");
            iniciliazar();

    } else if((c1==0 && c2==0 && c3==0) ||
        (c4==0 && c5==0 && c6==0) ||
          (c7==0 && c8==0 && c9==0) ||
           (c1==0 && c5==0 && c9==0) ||
            (c2==0 && c5==0 && c8==0) ||
             (c7==0 && c5==0 && c3==0) ||
              (c1==0 && c4==0 && c7==0) ||
               (c3==0 && c6==0  && c9==0)){
            alert("¡Tenemos Ganador!");
            iniciliazar();
            
    } else if(c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9 != null){
            alert("No hubo ganadores");
            iniciliazar();
            
    }
}



let boton = document.getElementById('btn-jugar');
    boton.addEventListener('click', function(){ iniciliazar();})
    
   


