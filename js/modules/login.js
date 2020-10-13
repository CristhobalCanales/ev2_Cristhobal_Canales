

export default{

    Alumnostabla: [

        { alumno: "Pablo Rojas", puntaje: 9, resultado: 'BUENO'}

    ],

    data: `

        <h1>Autor: Cristhobal Canales</h1>
        <br>
        Alumno <br>
        <input id="txt1" type="text" /> <br><br>
        Puntaje <br>
        <select id="txt2>
        <option values="0">0</option>
        <option values="1">1</option>
        <option values="2">2</option>
        <option values="3">3</option>
        <option values="4">4</option>
        <option values="5">5</option>
        <option values="6">6</option>
        <option values="7">7</option>
        <option values="8">8</option>
        <option values="9">9</option>
        <option values="10">10</option>
        </select>
        <br><br>
        
        <button>Registrar</button>
        <br><br>
        <div id="resultadologin" ></div>

    
    `,

    cargar: function() {
        var resultadologin = document.getElementById('resultadologin');
        var tabla = `
             <table border=1 width='400'>

                    <tr>

                          <th>Alumno</th>
                          <th>Puntaje</th>



                    </tr>

        `;

        this.alumnos.forEach(item => {

            tabla += `
            
                    <tr>
                        <td>${item.Alumno}</td>
                        <td>${item.Puntaje}</td>
                    </tr>

            `;

        });


        tabla += '</table>'

        resultadologin.innerHTML = tabla;


    },
    agregar: function() {

        var alumno = document.getElementById("txt1");
        var puntaje = document.getElementById("txt2");

        if (alumno.value != "" || puntaje.value !=""){

            var obj = {
                alumno: alumno.value,
                puntaje: puntaje.value,

            };

            this.Alumnostabla.push(obj);
            this.cargar();
            
            alumno.value = "";
            puntaje.value ="";

        }else{
                alert("complete los campos vacios");
            }
        }s


    };