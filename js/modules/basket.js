export default{
    data: `

        <h2>Marcador</h2>
        Equipo A <br>
        <input id="txt1" type="text"><br>
        Equipo B <br>
        <input id="txt2" type="text"><br>
        Puntos<br>
        <h1 id="puntos1">0</h1>
        <button onclick="suma1()">+1</button>
        <br>
        Puntos<br>
        <h1 id="puntos2">0</h1>
        <button onclick="suma2()">+1</button>
        <br><br>
        <button onclick="ganador()">Ganador</button>
        <div id="result">
        <p id=ganador></p></div>
        








    `,
    suma1: function(){
        var txt1 = document.getElementById("txt1").value;
        var puntos1= document.getElementById("puntos1");
        var result = document.getElementById("result");
    
        result.innerHTML ="";
        var s1 = 0;
        if (txt1 !="") {
            s1++;
            puntos1.innerHTML=s1;
            
        } else{
            result.style.color="red";
            result.innerHTML = "Ingrese equipo A";
        }
        
    },
    suma2: function(){
        var txt2 = document.getElementById("txt2").value;
        var puntos2= document.getElementById("puntos2");
        var result = document.getElementById("result");
        
        var s2=0;
        result.innerHTML ="";
        if (txt2 !="") {
            s2++;
            puntos2.innerHTML=`${s2}`;
        } else{
            result.style.color="red";
            result.innerHTML = "Ingrese equipo B";
        }
        
    },
    ganador: function(){
        var txt1 = document.getElementById("txt1").value;
        var puntos1= document.getElementById("puntos1").value;
        var txt2 = document.getElementById("txt2").value;
        var puntos2= document.getElementById("puntos2").value;
        var pganador = document.getElementById("ganador");

        if (txt1 !="" && txt2!="") {
            if (puntos1>puntos2) {
                pganador.innerHTML=`el ganador es ${txt1}`;
            } else if(puntos1<puntos2){
                pganador.innerHTML=`el ganador es ${txt2}`;
            }else{
                pganador.innerHTML=`hubo un empate`;
            }

        } else {
            pganador.style.color="red";
            pganador.innerHTML=`complete los campos`;
        }

    }
    
    



}