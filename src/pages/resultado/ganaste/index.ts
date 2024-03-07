export function initGanaste(params) {
  const div = document.createElement("div");
  div.className = "res-ganaste";
  div.innerHTML = `
        <div class="res-ganaste__img">
            <ganaste-el></ganaste-el>
        </div>
        <div class="res-ganaste__score">
            <score-el></score-el>
        </div>
        <div class="res-ganaste__button">
            <button-volver-jugar>Volver a jugar</button-volver-jugar>
        </div>
    `;

  const button = div.querySelector("button-volver-jugar");
  const shadowButton = button?.shadowRoot.querySelector("button");
  console.log(button);

  shadowButton?.addEventListener("click", () => {
    params.goTo("/instrucciones");
  });
  return div;

  return div;
}
