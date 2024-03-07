import { initJuego } from "./pages/juego";
import { initInicio } from "./pages/inicio";
import { initInstrucciones } from "./pages/instrucciones";
import { initPelea } from "./pages/pelea";
import { initGanaste } from "./pages/resultado/ganaste";
import { initPerdiste } from "./pages/resultado/perdiste";

export function isGithubPages() {
  return location.host.includes("github.io");
}
const BASE_PATH = "/piedra-papel-tijera/";
const routes = [
  {
    path: /\/inicio/,
    component: initInicio,
  },
  {
    path: /\/instrucciones/,
    component: initInstrucciones,
  },
  {
    path: /\/juego/,
    component: initJuego,
  },
  {
    path: /\/pelea/,
    component: initPelea,
  },
  {
    path: /\/resultadoGanaste/,
    component: initGanaste,
  },
  {
    path: /\/resultadoPerdiste/,
    component: initPerdiste,
  },
];

export function initRouter(container: any) {
  function goTo(path: string) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route: string) {
    console.log("El handleRoute recibio una nueva ruta", route);

    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }

        container.appendChild(el);
      }
    }
  }
  if (location.pathname === "/") {
    goTo("/inicio");
  } else {
    goTo(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
