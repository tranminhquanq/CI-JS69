import ConversationItem from "./ConversationItem.js";
import CreateNewConversationModal from "./CreateNewConversationModal.js";

export default class ConversationList {
  $conversationItem;
  $newConversationButton;
  $createConversationModal;

  constructor() {
    this.$conversationItem = new ConversationItem();
    this.$createConversationModal = new CreateNewConversationModal();

    this.$newConversationButton = document.createElement("button");
    this.$newConversationButton.textContent = "New conversation";
    this.$newConversationButton.setAttribute(
      "class",
      "bg-white py-2 px-4 font-bold rounded-full"
    );
    this.$newConversationButton.addEventListener("click", () => {
      this.$createConversationModal.opentModal();
    });
  }

  render(mainContainer) {
    const conversationListContainer = document.createElement("div");
    conversationListContainer.setAttribute(
      "class",
      "w-1/4 h-full py-4 px-8 bg-blue-400"
    );
    conversationListContainer.appendChild(this.$newConversationButton);
    conversationListContainer.app;
    this.$createConversationModal.render(conversationListContainer);

    this.$conversationItem.render(conversationListContainer);
    mainContainer.appendChild(conversationListContainer);
  }
}
