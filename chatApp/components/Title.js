export default class Title {
  $titleContainer;
  $conversationName;
  $members;

  _conversationName;
  _members;

  constructor(conversationName, members) {
    this._conversationName = conversationName;
    this._members = members;

    this.$titleContainer = document.createElement("div");
    this.$conversationName = document.createElement("h3");
    this.$members = document.createElement("h3");
  }

  setActiveConversation = (conversation) => {
    this.$conversationName.textContent = conversation.name;
    this.$members.textContent = conversation.users.length;
  };

  render(container) {
    this.$conversationName.textContent = this._conversationName;
    this.$members.textContent = this._members;
    this.$titleContainer.setAttribute("class", "flex justify-between mt-8");
    this.$conversationName.setAttribute("class", "text-xl font-bold");
    this.$members.setAttribute("class", "text-xl font-bold");

    this.$titleContainer.appendChild(this.$conversationName);
    this.$titleContainer.appendChild(this.$members);

    container.appendChild(this.$titleContainer);
  }
}
