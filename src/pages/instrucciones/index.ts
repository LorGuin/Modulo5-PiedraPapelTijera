import { state } from "../../state";

export function initInstrucciones(params) {
  const div = document.createElement("div");
  div.className = "init-instrucciones";
  div.innerHTML = `
  <div class="init-instrucciones__titulo">
    <h2>Presioná jugar y elegi: piedra, papel o tijeras antes de que pasen 5 segundos</h2>
  </div>
  <div class="init-instrucciones__button">
      <jugar-buttom>Jugar!</jugar-buttom">
  </div>
  <div class="init-instrucciones__reset-button">
      <reset-button>Reset Score</reset-button">
  </div>
  <div class="init-instrucciones-hands">
      <hands-el></hands-el>
  </div>        
  `;

  const button = div.querySelector(".init-instrucciones__button");
  button?.addEventListener("click", () => {
    params.goTo("/juego");
  });
  const reset = div.querySelector(".init-instrucciones__reset-button");
  reset?.addEventListener("click", () => {
    state.restartGame();
  });
  return div;
}
