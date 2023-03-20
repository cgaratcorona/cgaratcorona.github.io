//Funciones de botón

document.getElementById('boton').onclick = function () {
    document.getElementById('boton').style.display = 'none';
    document.getElementById('boton_ocultar').style.display = 'block';
    document.getElementById('mostrar_proyectos').style.display = 'block'
};

document.getElementById('boton_ocultar').onclick = function () {
    document.getElementById('boton').style.display = 'block';
    document.getElementById('boton_ocultar').style.display = 'none';
    document.getElementById('mostrar_proyectos').style.display = 'none'
};

//Funciones de formulario

document.getElementById('ingresar_nombre').oninvalid = function () {
    document.getElementById('ingresar_nombre').style.backgroundColor = '#FBDCCD';
};

document.getElementById('ingresar_apellido').oninvalid = function () {
    document.getElementById('ingresar_apellido').style.backgroundColor = '#FBDCCD';
};

document.getElementById('ingresar_nombre').oninvalid = function () {
    document.getElementById('ingresar_nombre').style.backgroundColor = '#FBDCCD';
};

document.getElementById('ingresar_telefono').oninvalid = function () {
    document.getElementById('ingresar_telefono').style.backgroundColor = '#FBDCCD';
};

document.getElementById('ingresar_ciudad').oninvalid = function () {
    document.getElementById('ingresar_ciudad').style.backgroundColor = '#FBDCCD';
};