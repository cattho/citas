let formulario = document.getElementById('formulario');
let listarCita = document.getElementById('listarCita');
let buscar= document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda');

let citas=JSON.parse(localStorage.getItem('Citas')) || []

const capturarDatos=() =>{
    let nombre=document.getElementById('nombre').value
    let fecha=document.getElementById('fecha').value
    let hora=document.getElementById('hora').value
    let sintomas=document.getElementById('sintomas').value
    let indice = citas.length

    let registro={
        nombre,
        fecha,
        hora,
        sintomas,
        indice
    }

    citas.push(registro)
    localStorage.setItem('Citas',JSON.stringify(citas))
    getLocalStorage()    
}

const getLocalStorage=()=>{
    listarCita.innerHTML=''

    let citasLocalStorage = JSON.parse(localStorage.getItem('Citas'))
    
    console.log(citasLocalStorage)

    citasLocalStorage.map(cita=>{
       
        const{nombre,fecha,hora,sintomas}=cita
        listarCita.innerHTML +=`        
            <tr>
                <td>${nombre}</td>
                <td>${fecha}</td>
                <td>${hora}</td>
                <td>${sintomas}</td>
            </tr>
        
        `

    })
}

buscar.addEventListener('click', e=>{
    e.preventDefault()
    let input=document.getElementById('inputbuscar').value
    let data = JSON.parse(localStorage.getItem('Citas'))
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase())

    busqueda.innerHTML=''
    
    filtro.length === 0 ?
    busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe
                            <button class="btn btn-primary mt-2"><a style="color:white; text-decoration:none;" href="/registro.html">Crear Usuario</a>
                            </button>
                            </div>`
    :
    filtro.map(cita =>{
        const{nombre, fecha, hora,sintomas,indice}= cita
        busqueda.innerHTML+=`
            <div style="color:white;">${nombre}</div>
            <div style="color:white;">${fecha}</div>
            <div style="color:white;">${hora}</div>
            <div style="color:white;">${sintomas}
                <button class="btn btn-primary mt-2" onclick="borrarCita(${indice})"> Borrar </button>
            </div>
            <br>
        `
    })  
})

function borrarCita(indice) {
    const buscarIndice = (element) => element.indice == indice;

    citas.splice(citas.findIndex(buscarIndice),1)

    localStorage.setItem('Citas',JSON.stringify(citas))
    window.location.reload()
}

document.addEventListener('DOMContentLoaded', getLocalStorage)

formulario.addEventListener('submit', e =>{
    e.preventDefault()    
    capturarDatos()
    e.target.reset()
})