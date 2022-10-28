function muestraOculta() {
    var x = document.getElementById('contenidos_1');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    document.getElementById("enlace_1").innerHTML = "Ocultar contenidos";
  } else {
    x.style.display = 'none';
    document.getElementById("enlace_1").innerHTML = "Mostrar contenidos";
  }
}
function muestraOculta2(){
    var x = document.getElementById('contenidos_2');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    document.getElementById("enlace_2").innerHTML = "Ocultar contenidos";
  } else {
    x.style.display = 'none';
    document.getElementById("enlace_2").innerHTML = "Mostrar contenidos";
  }
}
function muestraOculta3(){
    var x = document.getElementById('contenidos_3');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    document.getElementById("enlace_3").innerHTML = "Ocultar contenidos";
  } else {
    x.style.display = 'none';
    document.getElementById("enlace_3").innerHTML = "Mostrar contenidos";
  }
}