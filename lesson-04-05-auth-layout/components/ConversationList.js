import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

import ConversationItem from "./ConversationItem.js";
import CreateNewConversationModal from "./CreateNewConversationModal.js";

const db = getFirestore();
const conversationsRef = collection(db, "conversations");

export default class ConversationList {
  $conversationItem;
  $newConversationButton;
  $createConversationModal;
  $conversationListContainer;

  constructor() {
    this.$createConversationModal = new CreateNewConversationModal();
    this.$conversationListContainer = document.createElement("div");
    this.$conversationListContainer.setAttribute(
      "class",
      "w-1/4 h-full py-4 px-8 bg-blue-400"
    );

    this.$newConversationButton = document.createElement("button");
    this.$newConversationButton.textContent = "New conversation";
    this.$newConversationButton.setAttribute(
      "class",
      "bg-white py-2 px-4 font-bold rounded-full"
    );
    this.$newConversationButton.addEventListener("click", () => {
      this.$createConversationModal.opentModal();
    });

    this.test();
  }

  async test() {
    // getDocs(conversationsRef).then((docs) => {
    //   docs.forEach((doc) => {
    //     const conversationData = doc.data();
    //     const conversationItem = new ConversationItem(conversationData);
    //     conversationItem.render(this.$conversationListContainer);
    //   });
    // });

    const docs = await getDocs(conversationsRef);
    docs.forEach((doc) => {
      const conversationData = doc.data();
      const conversationItem = new ConversationItem(conversationData);
      conversationItem.render(this.$conversationListContainer);
    });
  }

  render(mainContainer) {
    this.$conversationListContainer.appendChild(this.$newConversationButton);
    this.$conversationListContainer.app;
    this.$createConversationModal.render(this.$conversationListContainer);

    mainContainer.appendChild(this.$conversationListContainer);
  }
}
