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

/* SCRIPT de Digitação */
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

/* Carrossel de Imagens */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => slide.classList.add("hidden"));
  dots.forEach((dot) => dot.classList.remove("opacity-100"));
  dots.forEach((dot) => dot.classList.add("opacity-50"));

  slides[slideIndex - 1].classList.remove("hidden");
  dots[slideIndex - 1].classList.remove("opacity-50");
  dots[slideIndex - 1].classList.add("opacity-100");
}

/* Ida ao Topo */
const scrollTopButton = document.getElementById("scrollTopButton");
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const halfway = document.body.scrollHeight / 2;
  const currentScroll = window.scrollY + window.innerHeight;

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;

  // Previne divisão por zero caso a altura do documento seja igual à altura da janela
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  progressBar.style.width = `${scrollPercent}%`;

  if (currentScroll >= halfway) {
    scrollTopButton.classList.remove("hidden");
  } else {
    scrollTopButton.classList.add("hidden");
  }
});
