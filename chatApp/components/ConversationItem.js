export default class ConversationItem {
  $conversationItemContainer;

  conversation;

  constructor(conversationData) {
    this.conversation = conversationData;
    this.$conversationItemContainer = document.createElement("div");
    this.$conversationItemContainer.setAttribute(
      "class",
      "bg-white py-2 px-4 rounded-full my-4 hover:bg-pink-400 cursor-pointer hover:text-white"
    );
  }

  render(conversationsContainer) {
    const conversationName = document.createElement("h2");
    conversationName.textContent = this.conversation.name;
    conversationName.setAttribute("class", "font-bold");

    this.$conversationItemContainer.appendChild(conversationName);

    conversationsContainer.appendChild(this.$conversationItemContainer);
  }
}
