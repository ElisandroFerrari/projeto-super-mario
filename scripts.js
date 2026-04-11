const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function MostrarForm() {
  form.style.visibility = "visible";
  mascara.style.visibility = "visible";

  if (isMobile()) {
    // bottom sheet
    form.style.left = "50%";
    form.style.bottom = "0";
    form.style.top = "auto";
    form.style.transform = "translate(-50%, 0)"; // sobe para aparecer
  } else {
    // desktop (seu comportamento)
    form.style.left = "50%";
    form.style.top = "50%";
    form.style.transform = "translate(-50%, -50%)"; // centraliza certinho
  }
}

function EsconderForm() {
  if (isMobile()) {
    // manda para baixo de novo
    form.style.transform = "translate(-50%, 110%)";
  } else {
    // volta para fora da tela à esquerda
    form.style.left = "-300px";
    form.style.transform = "translateY(-50%)"; // mantém seu padrão original
  }

  mascara.style.visibility = "hidden";
}