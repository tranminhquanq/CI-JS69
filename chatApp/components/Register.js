import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { auth } from "../constants/index.js";

import InputGroup from "./InputGroup.js";
import Login from "./Login.js";
import app from "../index.js";

class Register {
  $formEl;
  $displayNameEl;
  $emailEl;
  $passwordEl;
  $confirmPasswordEl;
  $submitButtonEl;
  $goToLoginPage;

  constructor() {
    this.$formEl = document.createElement("form");
    this.$formEl.setAttribute(
      "class",
      "w-1/3 bg-blue-400 py-12 px-4 mx-auto mt-24 rounded-xl"
    );

    this.$displayNameEl = new InputGroup(
      "text",
      "Full name",
      "Enter your full name"
    );

    this.$emailEl = new InputGroup("email", "Email", "Enter your email");

    this.$passwordEl = new InputGroup(
      "password",
      "Password",
      "Enter your password"
    );

    this.$confirmPasswordEl = new InputGroup(
      "password",
      "Confirm password",
      "Enter your password"
    );

    this.$submitButtonEl = document.createElement("button");
    this.$submitButtonEl.type = "submit";
    this.$submitButtonEl.addEventListener("click", this.handleSubmit);
    this.$submitButtonEl.textContent = "Submit";
    this.$submitButtonEl.setAttribute(
      "class",
      "bg-white py-2 px-4 rounded-md font-bold"
    );

    this.$goToLoginPage = document.createElement("p");
    this.$goToLoginPage.textContent = "Go to login";
    this.$goToLoginPage.setAttribute("class", "text-white font-bold mt-2");
    this.$goToLoginPage.addEventListener("click", this.onGoToLogin);
  }

  onGoToLogin = () => {
    const loginScreen = new Login();
    app.setActiveScreen(loginScreen);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validated = this.validation();

    if (validated !== null) {
      createUserWithEmailAndPassword(auth, validated.email, validated.password)
        .then((user) => {
          console.log(user.user);
          updateProfile(auth.currentUser, {
            displayName: validated.displayName,
          });
          sendEmailVerification(auth.currentUser);
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    }
  };

  validation() {
    const displayName = this.$displayNameEl.getInputValue();
    const email = this.$emailEl.getInputValue();
    const password = this.$passwordEl.getInputValue();
    const confirmPassword = this.$confirmPasswordEl.getInputValue();

    let flag = true;

    if (displayName.trim().length === 0) {
      this.$displayNameEl.setError("Full name can not empty");
      flag = false;
    } else {
      this.$displayNameEl.setError("");
    }

    if (email.trim().length === 0) {
      this.$emailEl.setError("Email can not empty");
      flag = false;
    } else {
      this.$emailEl.setError("");
    }

    if (password.trim().length === 0) {
      this.$passwordEl.setError("Password can not empty");
      flag = false;
    } else {
      this.$passwordEl.setError("");
    }

    if (confirmPassword.trim().length === 0) {
      this.$confirmPasswordEl.setError("Confirm password can not empty");
      flag = false;
    } else {
      this.$confirmPasswordEl.setError("");
    }

    if (password !== confirmPassword) {
      this.$confirmPasswordEl.setError("Password does not match");
      flag = false;
      this.$confirmPasswordEl.setError("");
    }

    if (flag === true) {
      return {
        displayName: displayName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
    }
    return null;
  }

  render(container) {
    this.$formEl.appendChild(this.$displayNameEl.render());
    this.$formEl.appendChild(this.$emailEl.render());
    this.$formEl.appendChild(this.$passwordEl.render());
    this.$formEl.appendChild(this.$confirmPasswordEl.render());

    const formBottom = document.createElement("div");
    formBottom.setAttribute("class", "flex justify-between");
    formBottom.appendChild(this.$submitButtonEl);
    formBottom.appendChild(this.$goToLoginPage);
    this.$formEl.appendChild(formBottom);

    container.appendChild(this.$formEl);
  }
}

export default Register;
