import { state } from "../../state";

class ResetButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      state.restartGame(); // por aca reiniciamos el juego (restarGame)
    });
  }

  render() {
    const style = document.createElement("style");
    style.textContent = `
       .root {
         width: 322px;
         height: 87px;
         margin-top: 20px;
         border: solid #900C3F 10px;
         border-radius: 10px;
         background-color: #C70039;
         font-family: 'Odibee Sans', sans-serif;
         font-size: 45px;
         text-align: center;
       }`;

    const button = document.createElement("button");
    button.textContent = this.textContent;
    button.className = "root";

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(button);
  }
}

customElements.define("reset-button", ResetButton);
