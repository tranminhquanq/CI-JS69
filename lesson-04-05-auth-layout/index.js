import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import Login from "./components/Login.js";
import Main from "./components/Main.js";

const auth = getAuth();

class App {
  activeScreen;
  container;

  constructor(container) {
    this.container = container;
    this.setupAuthenticationListener();
  }

  setupAuthenticationListener() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const mainScreen = new Main();
        this.setActiveScreen(mainScreen);
      } else {
        const loginScreen = new Login();
        this.setActiveScreen(loginScreen);
      }
    });
  }

  setActiveScreen(screen) {
    if (this.activeScreen !== undefined) {
      this.container.innerHTML = "";
    }
    this.activeScreen = screen;
    this.activeScreen.render(this.container);
  }
}

const appContainer = document.getElementById("app");

const app = new App(appContainer);

export default app;
