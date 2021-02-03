/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  // ID txtIdImporte  id="txtIdResultado"//

  var importeingresado;
  //importeingresado= txtIdImporte.value;//
  importeingresado = document.getElementById("txtIdImporte").value;
  txtIdResultado.value = "el importe es: " + importeingresado;
}
