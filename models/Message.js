const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  descprition: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
