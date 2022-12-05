const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('.parrafito');
// const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.getElementById('result');

// form.addEventListener('submit', sumarInputValues); //addEventListener: de cual elemento HTML estamos hablando - click: es uno de lo miles de eventos que hay - 
// // btnOncClick: Cual es la funcion que debe mandar a llamar cuando tengamos ese evento de click

// function sumarInputValues(event) {
//     event.preventDefault();
//     // console.log(input1.value + input2.value);
//     const suma = parseInt(input1.value) + parseInt(input2.value);
//     result.innerText = "El resultado es:" + " " + suma
//     console.log(suma);
// }


btn.addEventListener('click', sumarInputValues); //addEventListener: de cual elemento HTML estamos hablando - click: es uno de lo miles de eventos que hay - 
// btnOncClick: Cual es la funcion que debe mandar a llamar cuando tengamos ese evento de click

function sumarInputValues() {
    
    // console.log(input1.value + input2.value);
    const suma = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "El resultado es:" + " " + suma
    console.log(suma);
}








// console.log(input.value);

// console.log({
// h1,
// p,
// parrafito,
// pid,
// input,
// });

// h1.innerHTML = 'Cambiado nombre por js <br> aaa';
// h1.innerText = 'Cambiado nombre por js <br> aaa';
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo')

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('verde'); Cuando tiene una clase o no, se puede poner o quitar las veces que se quiera
// // h1.classList.contains('verde'); Es una especia de condicional, no devuelve TRUE O FALSE, dependiendo si nuestro elemento tiene la clase que le estemos pregunatando

// input.value = "456";


// const img = document.createElement('img');
// img.setAttribute('src', 'https://josefacchin.com/wp-content/uploads/2017/12/como-reducir-tamao-imagenes.png');

// console.log(img);

// pid.innerHTML = ""; // Sacando el parrafo
// pid.appendChild(img);


