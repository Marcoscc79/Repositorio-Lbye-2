const contenedor = document.getElementById("adivinanza");
const botonRes = document.getElementById("boton");
const resultadoAdivinanza = document.getElementById("resultado");

const preguntas = [
    {
        pregunta : "1. Cómo se llaman los NAP aprobados en septiembre de 2018?",
        respuestas : {
            a: "Ciencias iformáticas",
            b: "Inglés",
            c: "Educación digital, programación y robótica"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta : "2. Cómo son las competencias que nos obligan a adquirir estos NAP?",
        respuestas : {
            a: "Digitales",
            b: "Linguisticas",
            c: "Actitudinales"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta : "3. Cómo se llama el carro de carga y de guarda con netbooks que entregó el gobierno nacional a las escuelas primarias?",
        respuestas : {
            a: "A. C. M.",
            b: "A. D. M.",
            c: "A. T. R."
        },
        respuestaCorrecta: "b"
    }
];

function mostrarAdivinanza() {
    const preguntasYrespuestas = [];
    
    preguntas.forEach((preguntaActual, numeroDePregunta)=> {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
               `<label>
                   <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                   ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}    
               </label>`);
        }
        preguntasYrespuestas.push(`<div class="custion"> ${preguntaActual.pregunta}</div>
                                   <div class="respuestas"> ${respuestas.join('')}</div>`);
    });
    
    contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarAdivinanza();
 
function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;
    
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;
        
        if(respuestaElegida === preguntaActual.respuestaCorrecta) {
            respuestasCorrectas++;

            respuestas[numeroDePregunta].style.color = 'green';
        }   
        else {
            respuestas[numeroDePregunta].style.color = 'red';
        }
    });
    
    resultadoAdivinanza.innerHTML = 'Acertaste: ' + respuestasCorrectas + ' preguntas de un total de ' + preguntas.length;
}

botonRes.addEventListener('click', mostrarResultado);