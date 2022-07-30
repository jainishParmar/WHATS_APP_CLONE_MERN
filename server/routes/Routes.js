import express from "express";
import {
  getConversation,
  newConversation,
} from "../controller/conversation-controller.js";
import { getMessage, newMessage } from "../controller/message-controller.js";

import { addUser, getUsers } from "../controller/user-controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

export default route;
