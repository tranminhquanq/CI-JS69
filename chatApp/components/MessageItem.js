import { auth, messagesRef } from "../constants/index.js";
import {
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

export default class MessageItem {
  $msgContainer;
  $msgContent;
  $sender;
  $createdAt;
  $img;
  $video;

  _messageValue;
  _auth;
  constructor(messageValue) {
    this._messageValue = messageValue;
    console.log(this._messageValue);
    this._auth = auth.currentUser;

    this.$msgContainer = document.createElement("div");
    this.$msgContent = document.createElement("p");
    this.$sender = document.createElement("p");
    this.$createdAt = document.createElement("p");
    this.$img = document.createElement("img");
    this.$video = document.createElement("video");

    this.$msgContent.addEventListener("dblclick", this.handleDeleteMessage);
  }

  handleDeleteMessage = () => {
    if (this._auth.email === this._messageValue.sender) {
      deleteDoc(doc(messagesRef, this._messageValue.docId));
      this.$msgContainer.remove();
    }
  };

  render() {
    this.$msgContainer.setAttribute("class", "flex flex-col");
    if (this._auth.email === this._messageValue.sender) {
      this.$msgContent.setAttribute(
        "class",
        "inline-block ml-auto max-w-max	bg-blue-400 rounded-full py-2 px-4 mb-4 text-right text-white"
      );
      this.$sender.setAttribute(
        "class",
        "inline-block	font-bold mb-2 text-right"
      );
    } else {
      this.$msgContent.setAttribute(
        "class",
        "bg-gray-300 max-w-max rounded-full py-2 px-4 mb-4"
      );
      this.$sender.setAttribute("class", "font-bold mb-2");
    }

    this.$msgContent.textContent = this._messageValue.content;
    this.$sender.textContent = this._messageValue.sender;
    if (this._messageValue.image) {
      this.$img.src = this._messageValue.image;
      this.$img.setAttribute("class", "w-64 mr-0 ml-auto object-cover");
      this.$msgContainer.appendChild(this.$img);
    }
    if (this._messageValue.video) {
      this.$video.src = this._messageValue.video;
      this.$video.setAttribute("class", "w-64 mr-0 ml-auto");
      this.$video.setAttribute("controls", true);
      this.$msgContainer.appendChild(this.$video);
    }

    this.$msgContainer.appendChild(this.$sender);
    this.$msgContainer.appendChild(this.$msgContent);

    return this.$msgContainer;
  }
}
