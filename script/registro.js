var usuario = document.getElementById('registro_nombre').value;
var correo = document.getElementById('registro_email').value;
var contraseña = document.getElementById('registro_password').value;
var guardar=document.getElementById('btn_guardar');

guardar.addEventListener('click',e=>{
    e.preventDefault()
    let data=JSON.parse(localStorage.getItem)
})