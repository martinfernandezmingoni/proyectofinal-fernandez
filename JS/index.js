const fotoPersonajes = document.getElementById("imgPersonajes");
const nombrePersonaje = document.getElementById("personaje");
const nombreJugador = document.getElementById('jugador');
const btnLogin = document.getElementById('ingresar');

const width = window.innerWidth
const height = window.innerHeight

ingresar.addEventListener('click',()=>{
    localStorage.setItem('name', jugador.value);
});

    let jugadorNombre = localStorage.getItem('name');
    //console.log(jugadorNombre);

let radios = document.querySelectorAll('button[type="radio"]');

//console.log(radios);

radios.forEach(item=> {
    item.addEventListener('click', ()=>{
        localStorage.setItem('personaje', item.value);
  //console.log('Eligiste al personaje '+item.value);
    })
})

function cambiarPersonaje(elemento,source){
    elemento.src = source;
 }

const familias = [{
    id:1,
    name:'Homero',
    imagen: './img/homero.jpg'
}, {
    id:2,
    name:'Marge',
    imagen: './img/marge.jpg'
}, {
    id:3,
    name:'Bart',
    imagen: './img/bart.jpg'
}, {
    id:4,
    name:'Lisa',
    imagen: './img/lisa.jpg'
}, {
    id:5,
    name:'Maggie',
    imagen: './img/magie.jpg'
}]
 radios.forEach(item => {
    item.addEventListener('click', () => {
        let personajeUsuario = item.value;
        let variante = familias.find((familia) => familia.name == personajeUsuario);
        cambiarPersonaje(fotoPersonajes, variante.imagen);
    })
 });


 radios.forEach(item => {
    item.addEventListener('click', () => {
        let personajeUsuario = item.value;
        let variante = familias.find((familia) => familia.name == personajeUsuario);
        if(item.name == "homero" ){
            Toastify({
                text:"¡Ya-hoo!",
                duration: 2000,
                position: "center",
                style: {
                    colour: 'white',
                    background: "#0d6efd",
                },
                offset:{
                    y: "20vw" 
                },
            }).showToast();
        }else if(item.name == "marge" ){
            Toastify({
                text:"¡Mmm!",
                duration: 2000,
                position: "center",
                style: {
                    colour: 'white',
                    background: "#0d6efd",
                    
                },
                offset:{
                    y: "20vw" 
                },
            }).showToast();
        }else if(item.name == "bart" ){
            Toastify({
                text:"Yo no fui",
                duration: 2000,
                position: "center",
                style: {
                    colour: 'white',
                    background: "#0d6efd",
                    
                },
                offset:{
                    y: "20vw" 
                },
            }).showToast();
        }else if(item.name == "lisa" ){
            Toastify({
                text:"Gracias!",
                duration: 2000,
                position: "center",
                style: {
                    colour: 'white',
                    background: "#0d6efd",
                    
                },
                offset:{
                    y: "20vw" 
                },
            }).showToast();
        }else if(item.name == "maggie" ){
            Toastify({
                text:"Chweek-Chweek",
                duration: 2000,
                position: "center",
                style: {
                    width: '5vw',
                    colour: 'white',
                    background: "#0d6efd",
                    
                },
                offset:{
                    y: "20vw" 
                },
            
            }).showToast();
        }
       
        cambiarPersonaje(fotoPersonajes, variante.imagen);
    })
 });

// homero.addEventListener('click', () => {
//     Toastify({
//         text:"hola",
//         duration: 2000
//     }).showToast();
// });