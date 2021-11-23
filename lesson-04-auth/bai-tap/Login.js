class Login {
  $titleEL;

  constructor() {
    this.$titleEL = document.createElement("h1");
    this.$titleEL.textContent = "Hello From Login page";
  }

  render(component) {
    component.appendChild(this.$titleEL);
  }
}

export default Login;
