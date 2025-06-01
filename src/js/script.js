/* Mostrar Caminho - Google Maps */
function mostrarCaminho() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const destino = "-23.568704484688543,-46.662406284681176";
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destino}&travelmode=driving`;
        window.open(url, "_blank");
      },
      function (error) {
        alert(
          "Não foi possível obter sua localização. Verifique as permissões."
        );
      }
    );
  } else {
    alert("Geolocalização não é suportada neste navegador.");
  }
}

/*SCRIPT de Digitação */

const frases = [
  "Corte com estilo e precisão",
  "A melhor experiência da sua vida",
  "Barbearia não é luxo, é cuidado",
  "Aqui, você é o destaque",
];
let fraseIndex = 0;
let charIndex = 0;
const slogan = document.getElementById("slogan");

function digitar() {
  if (charIndex < frases[fraseIndex].length) {
    slogan.textContent += frases[fraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(digitar, 70);
  } else {
    setTimeout(apagar, 2000);
  }
}

function apagar() {
  if (charIndex > 0) {
    slogan.textContent = frases[fraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(apagar, 40);
  } else {
    fraseIndex = (fraseIndex + 1) % frases.length;
    setTimeout(digitar, 500);
  }
}

digitar();
