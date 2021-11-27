import ConversationList from "./ConversationList.js";

export default class Main {
  $conversationList;

  constructor() {
    this.$conversationList = new ConversationList();
  }

  render(container) {
    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "flex w-screen h-screen bg-gray-400");

    const content = document.createElement("div");
    content.setAttribute("class", "w-full h-full px-24 bg-white");
    content.textContent = "Content";

    this.$conversationList.render(mainContainer);
    mainContainer.appendChild(content);

    container.appendChild(mainContainer);
  }
}
