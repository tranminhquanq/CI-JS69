import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { auth } from "../constants/index.js";

import InputGroup from "./InputGroup.js";
import Register from "./Register.js";
import Main from "./Main.js";
import app from "../index.js";

export default class Login {
  $emailEl;
  $pwEl;
  $formEl;
  $btnEl;
  $goToRegister;

  constructor() {
    this.$formEl = document.createElement("form");
    this.$formEl.setAttribute(
      "class",
      "w-1/3 bg-blue-400 py-12 px-4 mx-auto mt-24 rounded-xl"
    );
    this.$formEl.addEventListener("submit", this.handleLogin);

    this.$emailEl = new InputGroup("email", "Email", "Enter your email");
    this.$pwEl = new InputGroup("password", "Password", "Enter your password");

    this.$btnEl = document.createElement("button");
    this.$btnEl.textContent = "Login";
    this.$btnEl.type = "submit";
    this.$btnEl.setAttribute(
      "class",
      "bg-white py-2 px-4 rounded-md font-bold"
    );

    this.$goToRegister = document.createElement("p");
    this.$goToRegister.textContent = "Go to Register page";
    this.$goToRegister.setAttribute("class", "text-white font-bold mt-2");
    this.$goToRegister.addEventListener("click", this.goToRegisterPage);
  }

  handleLogin = (e) => {
    e.preventDefault();

    const email = this.$emailEl.getInputValue();
    const password = this.$pwEl.getInputValue();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        const mainScreen = new Main();
        app.setActiveScreen(mainScreen);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  goToRegisterPage = () => {
    const registerScreen = new Register();
    app.setActiveScreen(registerScreen);
  };

  render(container) {
    this.$formEl.appendChild(this.$emailEl.render());
    this.$formEl.appendChild(this.$pwEl.render());

    const formBottom = document.createElement("div");
    formBottom.classList.add("flex", "justify-between");
    formBottom.appendChild(this.$btnEl);
    formBottom.appendChild(this.$goToRegister);

    this.$formEl.appendChild(formBottom);

    container.appendChild(this.$formEl);
  }
}
