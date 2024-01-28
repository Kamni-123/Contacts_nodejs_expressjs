const express = require("express");
const router = express.Router();
const {getContacts, 
    updateContact, 
    deleteContact, 
    createContact,
    getContact} = require("../controller/contactcontroller")


router.route("/").get(getContacts);
router.route("/").post(createContact);
router.route("/:id").get(getContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);
module.exports= router;