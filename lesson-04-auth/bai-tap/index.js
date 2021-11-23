import Register from "./Register.js";

class App {
  activeScreen;
  container;

  constructor(container) {
    this.container = container;
    console.log(this.activeScreen);
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

app.setActiveScreen(new Register());

export default app;
