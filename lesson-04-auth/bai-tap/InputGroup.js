class InputGroup {
  $containerEl;
  $lableEl;
  $inputEl;

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
  }

  render() {
    this.$containerEl.appendChild(this.$lableEl);
    this.$containerEl.appendChild(this.$inputEl);

    return this.$containerEl;
  }
}

export default InputGroup;
