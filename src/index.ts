import { initRouter } from "./router";
import "./components/boton-inicio";
import "./components/hands-el";
import "./components/button-reset";
import "./components/button-jugar";
import "./components/countDown-comp";
import "./components/computer-play";
import "./components/perdiste-el";
import "./components/score";
import "./components/button-volver-a-jugar";
import "./components/ganaste-el";

(function () {
  const root = document.querySelector(".root");
  initRouter(root);
})();
