import { getAuth } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import {
  getFirestore,
  collection,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

export const auth = getAuth();
export const db = getFirestore();
export const conversationsRef = collection(db, "conversations");
export const messagesRef = collection(db, "messages");
export const messagesMock = [
  {
    content: "hi 1",
    conversationId: "KaZxTzIcWOfEpW7S10KZ",
    createdAt: 1639446544658,
    sender: "1@gmail.com",
  },
  {
    content: "hi 3",
    conversationId: "EpW7aZxTzIcWOfS10KZK",
    createdAt: 1665446539448,
    sender: "2@gmail.com",
  },
  {
    content: "hi 3",
    conversationId: "aZxTzIEpW7S10KZKcWOf",
    createdAt: 1639444465865,
    sender: "3@gmail.com",
  },
  {
    content: "hi 4",
    conversationId: "aZxTzIEpW7S10KZKcWOf",
    createdAt: 1639444465865,
    sender: "3@gmail.com",
  },
];
