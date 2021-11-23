class InputGroup {
  $containerEl;
  $lableEl;
  $inputEl;
  $errorEl;

  constructor(type, lableName, placeholder) {
    this.$containerEl = document.createElement("div");
    this.$containerEl.setAttribute("class", "flex flex-col mb-4");

    this.$lableEl = document.createElement("label");
    this.$lableEl.textContent = lableName;
    this.$lableEl.setAttribute("class", "text-white font-bold mb-2");

    this.$inputEl = document.createElement("input");
    this.$inputEl.type = type;
    this.$inputEl.placeholder = placeholder;
    this.$inputEl.setAttribute("class", "py-2 px-4 rounded-md");

    this.$errorEl = document.createElement("p");
  }

  getInputValue() {
    return this.$inputEl.value;
  }

  setError(message) {
    if (message !== "") {
      this.$errorEl.textContent = message;
      this.$errorEl.setAttribute("class", "text-red-700 text-md font-bold");
    } else {
      this._errorValue = "";
      this.$errorEl.textContent = "";
    }
  }

  render() {
    this.$containerEl.appendChild(this.$lableEl);
    this.$containerEl.appendChild(this.$inputEl);
    this.$containerEl.appendChild(this.$errorEl);

    return this.$containerEl;
  }
}

export default InputGroup;
