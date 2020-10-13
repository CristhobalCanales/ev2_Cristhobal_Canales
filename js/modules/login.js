

export default{

    alumnos: [
        {Alumno: "Pablo Rojas",Puntaje:9,resultadologin'BUENO'}
    ],
    data: `

        <h1>Autor: Cristhobal Canale</h1>
        <br>
        Alumno <br>
        <input id="txt1" type="text" /> <br>
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
        <br>
        
        <button>Registrar</button>
        <br><br>
        <div> id="resultadologin" </div>

    
    `,

    cargar: function() {
        var resultadologin = document.getElementById('resultadologin');
    },
    agregar: function() {},

};