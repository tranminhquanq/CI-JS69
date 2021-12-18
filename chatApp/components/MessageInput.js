import { addDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";
import { auth, messagesRef } from "../constants/index.js";

const storage = getStorage();
export default class MessageInput {
  $form;
  $input;
  $file;
  $btn;

  _activeConversation;
  _fileType = "";
  _fileUrl = "";

  constructor() {
    this.$form = document.createElement("form");
    this.$form.addEventListener("submit", this.onSubmit);

    this.$input = document.createElement("input");
    this.$input.type = "text";
    this.$input.placeholder = "Enter your message";

    this.$file = document.createElement("input");
    this.$file.type = "file";
    this.$file.classList.add("custom-file-input");
    this.$file.addEventListener("change", this.onChangeUpload);

    this.$btn = document.createElement("button");
    this.$btn.type = "submit";
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.$input.value) {
      const newMessage = {
        content: this.$input.value,
        sender: auth.currentUser.email,
        conversationId: this._activeConversation.conversationId,
        createdAt: new Date().valueOf(),
        image: this._fileType.includes("image") ? this._fileUrl : "",
        video: this._fileType.includes("video") ? this._fileUrl : "",
      };
      console.log(newMessage);
      addDoc(messagesRef, newMessage);
      this.$input.value = "";
      this.$file.value = "";
    } else {
      alert("Không được để trống nội dung");
    }
  };

  onChangeUpload = (e) => {
    const file = e.target.files[0];
    this._fileType = file.type;
    const imageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(imageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log("error upload", error);
        alert("Tai file le that bai");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          this._fileUrl = url;
        });
      }
    );
  };

  setActiveConversation = (conversation) => {
    this._activeConversation = conversation;
  };

  render(container) {
    this.$form.setAttribute("class", "py-6");
    this.$input.setAttribute("class", "w-full py-2 px-4 rounded-full border-2");
    this.$btn.setAttribute("class", "invisible");

    this.$form.appendChild(this.$input);
    this.$form.appendChild(this.$file);
    this.$form.appendChild(this.$btn);

    container.appendChild(this.$form);
  }
}
