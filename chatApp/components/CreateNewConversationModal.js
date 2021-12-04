import { addDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { auth, conversationsRef } from "../constants/index.js";

import InputGroup from "./InputGroup.js";

export default class CreateNewConversationModal {
  $modalContainer;
  $nameInput;
  $targetUser;
  $btnCreate;

  constructor() {
    this.$nameInput = new InputGroup(
      "text",
      "Conversation name",
      "Enter your conversation name"
    );

    this.$targetUser = new InputGroup("text", "User", "Enter your user");

    this.$btnCreate = document.createElement("button");
    this.$btnCreate.textContent = "Create new conversation";
    this.$btnCreate.setAttribute(
      "class",
      "bg-blue-400 text-white py-2 px-4 rounded-full"
    );

    this.$modalContainer = document.createElement("form");
    this.$modalContainer.setAttribute(
      "class",
      "modal fixed w-64 hidden top-1/2 left-1/2 bg-red-400 p-4"
    );
    this.$modalContainer.addEventListener("submit", this.onSubmit);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newConversation = {
      name: this.$nameInput.getInputValue(),
      creator: auth.currentUser.uid,
      users: [auth.currentUser.email, this.$targetUser.getInputValue()],
    };
    addDoc(conversationsRef, newConversation);
    alert("Succsessfull");
    this.$modalContainer.classList.add("hidden");
  };

  opentModal() {
    this.$modalContainer.classList.toggle("hidden");
  }

  render(conversationListContainer) {
    this.$modalContainer.appendChild(this.$nameInput.render());
    this.$modalContainer.appendChild(this.$targetUser.render());
    this.$modalContainer.appendChild(this.$btnCreate);

    conversationListContainer.appendChild(this.$modalContainer);
  }
}

// Collection => table (mysql)
// Document => record (row ) mysql
