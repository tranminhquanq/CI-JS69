import InputGroup from "./InputGroup.js";

class Register {
  $formEl;
  $displayNameEl;
  $emailEl;
  $passwordEl;
  $confirmPasswordEl;
  $submitButtonEl;

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
    this.$submitButtonEl.textContent = "Submit";
    this.$submitButtonEl.setAttribute(
      "class",
      "bg-white py-2 px-4 rounded-md font-bold"
    );
  }

  render() {
    this.$formEl.appendChild(this.$displayNameEl.render());
    this.$formEl.appendChild(this.$emailEl.render());
    this.$formEl.appendChild(this.$passwordEl.render());
    this.$formEl.appendChild(this.$confirmPasswordEl.render());
    this.$formEl.appendChild(this.$submitButtonEl);

    return this.$formEl;
  }
}

export default Register;
