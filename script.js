
function cambiarLetra(tamano) {
  document.getElementById("cuerpo").style.fontSize = tamano + "px";
}


function cambiarFondo(colorFondo, colorTexto) {
  let cuerpo = document.getElementById("cuerpo");
  cuerpo.style.backgroundColor = colorFondo;
  cuerpo.style.color = colorTexto;
}