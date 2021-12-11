export default class MessageList {
  $msgListContainer;

  constructor() {
    this.$msgListContainer = document.createElement("div");
    this.$msgListContainer.textContent = "No conversation";
  }

  setActiveConversation = (conversation) => {
    this.$msgListContainer.textContent = conversation.name;
  };

  render(container) {
    this.$msgListContainer.setAttribute("class", "flex-1");
    container.appendChild(this.$msgListContainer);
  }
}
