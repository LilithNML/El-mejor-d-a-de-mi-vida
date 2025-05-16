const contador = document.getElementById("contador");
const fechaInicio = new Date("2024-11-09T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  let diferencia = ahora - fechaInicio;

  const segundosTotales = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundosTotales / 60) % 60;
  const horas = Math.floor(segundosTotales / 3600) % 24;
  const diasTotales = Math.floor(segundosTotales / (3600 * 24));

  const años = Math.floor(diasTotales / 365.25);
  const meses = Math.floor((diasTotales % 365.25) / 30.44);
  const días = Math.floor((diasTotales % 365.25) % 30.44);

  contador.textContent = 
    `${años} año(s), ${meses} mes(es), ${días} día(s), ` +
    `${String(horas).padStart(2, '0')}h:` +
    `${String(minutos).padStart(2, '0')}m:` +
    `${String(segundosTotales % 60).padStart(2, '0')}s`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
