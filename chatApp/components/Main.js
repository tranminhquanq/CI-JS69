import ConversationList from "./ConversationList.js";
import Title from "./Title.js";

export default class Main {
  $conversationList;
  $title;

  constructor() {
    this.$conversationList = new ConversationList((conversation) => {
      this.setActiveConversation(conversation);
    });
    this.$title = new Title("No data", 0);
  }

  setActiveConversation = (conversation) => {
    this.$title.setActiveConversation(conversation);
    console.log(
      "log conversation from setActiveConversation function",
      conversation
    );
  };

  render(container) {
    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "flex w-screen h-screen bg-gray-400");

    const content = document.createElement("div");
    content.setAttribute("class", "w-full h-full px-24 bg-white");
    this.$title.render(content);

    this.$conversationList.render(mainContainer);
    mainContainer.appendChild(content);

    container.appendChild(mainContainer);
  }
}
