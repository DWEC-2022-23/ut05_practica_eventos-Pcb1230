let screenLog = document.querySelector('#coordenadas');
let screenClick = document.querySelector('#clicks');
let key = document.querySelector('#key');
document.addEventListener('mousemove', logKey);
document.addEventListener('click', n1);
document.addEventListener("keydown", n2);

function logKey(e) {
  screenLog.innerText = `
    Navegador ${"["+e.screenX}, ${e.screenY+"]"}
    Pagina ${"["+e.clientX}, ${e.clientY+"]"}`;
    document.getElementById("info").style.display='block';
    document.getElementById("info").style.background = "white";
    document.getElementById("teclado").style.display='none';
}
function n1(){
  document.getElementById("info").style.display='block';
  document.getElementById("info").style.background = "#FFFFCC";
  document.getElementById("teclado").style.display='none';
}
function n2(e){
  document.getElementById("teclado").style.display='block';
  document.getElementById("teclado").style.background = "#CCE6FF";
  document.getElementById("info").style.display='none';
  key.textContent= `
  Carácter o Letra ${"["+e.key+"]"} Código ${"["+e.keyCode+"]"}`;
}