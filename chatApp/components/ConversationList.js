import {
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { auth, conversationsRef } from "../constants/index.js";

import ConversationItem from "./ConversationItem.js";
import CreateNewConversationModal from "./CreateNewConversationModal.js";

export default class ConversationList {
  $conversationItem;
  $newConversationButton;
  $createConversationModal;
  $conversationListContainer;
  $conversationListContent;
  $logOutBtn;

  _onChangeActiveConversation;

  constructor(onChangeActiveConversation) {
    this._onChangeActiveConversation = onChangeActiveConversation;
    this.$createConversationModal = new CreateNewConversationModal();
    this.$conversationListContainer = document.createElement("div");
    this.$conversationListContainer.setAttribute(
      "class",
      "w-1/4 h-full py-4 px-8 bg-blue-400"
    );
    this.$conversationListContent = document.createElement("div");

    this.$newConversationButton = document.createElement("button");
    this.$newConversationButton.textContent = "New conversation";
    this.$newConversationButton.setAttribute(
      "class",
      "bg-white py-2 px-4 font-bold rounded-full"
    );
    this.$newConversationButton.addEventListener("click", () => {
      this.$createConversationModal.opentModal();
    });

    this.$logOutBtn = document.createElement("button");
    this.$logOutBtn.textContent = "SignOut";
    this.$logOutBtn.addEventListener("click", this.onSignOut);

    this.setupConversationListener();
  }

  setupConversationListener() {
    this.$conversationListContent.innerHTML = "";
    const q = query(
      conversationsRef,
      where("users", "array-contains", auth.currentUser.email)
    );

    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const conversationItem = new ConversationItem(
            {
              ...change.doc.data(),
              conversationId: change.doc.id,
            },
            (conversation) => {
              this._onChangeActiveConversation(conversation);
            }
          );
          conversationItem.render(this.$conversationListContent);
        }
      });
    });
  }

  onSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        alert("Vui long thu lai sau");
      });
  };

  render(mainContainer) {
    this.$conversationListContainer.appendChild(this.$newConversationButton);
    this.$conversationListContainer.appendChild(this.$conversationListContent);
    this.$createConversationModal.render(this.$conversationListContainer);
    this.$conversationListContainer.appendChild(this.$logOutBtn);
    mainContainer.appendChild(this.$conversationListContainer);
  }
}
