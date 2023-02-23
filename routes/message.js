var express = require("express");
var router = express.Router();
const Message = require("../models/Message");

router.post("/createTicket", async (req, res) => {
  try {
    const ticket = await Message.create({
      fullname: req.body.fullname,
      email: req.body.email,
      descprition: req.body.description,
      status: "new",
    });
    res.json(ticket);
  } catch (err) {
    res.json(err.message);
  }
});

router.post("/newStatus", async (req, res) => {
  try {
    const status = await Message.findByIdAndUpdate({
      latestStatus: req.body.latestStatus,
    });
    res.json(status);
  } catch (err) {
    res.json(err.message);
  }
});

router.post("/update-ticket/:id", async (req, res) => {
  try {
    const updateTicket = await Message.findByIdAndUpdate(
      (ticketId = req.params.id),
      {
        ...req.body,
      },
      { new: true }
    );
    res.json(updateTicket);
  } catch (err) {
    res.json(err.message);
  }
});

router.get("/messages", async (req, res) => {
  try {
    const allTickets = await Message.find();
    res.json(allTickets);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
