import MessageItem from "./MessageItem.js";
import { messagesRef } from "../constants/index.js";
import {
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

export default class MessageList {
  $msgListContainer;

  constructor() {
    this.$msgListContainer = document.createElement("div");
    this.$msgListContainer.textContent = "No conversation";
  }

  setActiveConversation = (conversation) => {
    this.$msgListContainer.innerHTML = "";
    this.setupMessagesListener(conversation.conversationId);
  };

  setupMessagesListener(conversationId) {
    const q = query(messagesRef, where("conversationId", "==", conversationId));
    onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const msg = change.doc.data();
          messages.push({
            ...msg,
            docId: change.doc.id,
          });
        } else if (change.type === "removed") {
          console.log(change.doc.data());
        }
      });
      messages.sort((a, b) => a.createdAt - b.createdAt);
      messages.forEach((msg) => {
        const msgEl = new MessageItem(msg);
        this.$msgListContainer.appendChild(msgEl.render());
      });
    });
  }

  render(container) {
    this.$msgListContainer.setAttribute("class", "flex-1 overflow-y-scroll");
    container.appendChild(this.$msgListContainer);
  }
}
