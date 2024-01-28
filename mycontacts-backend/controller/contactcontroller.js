const asyncHandler = require("express-async-handler");
const contact = require("../models/contactmodels");
const contactmodels = require("../models/contactmodels");

// description get all contacts
// route get /api/contacts
// access public

const getContacts = asyncHandler(async(req,res)=>{
    const contacts= await contact.find();
    res.status(200).json(contacts);
});


const createContact = asyncHandler(async (req,res)=>{
    console.log("the request body is:", req.body);
    const{name, email, phone}= req.body;
    if(!name|| !email|| !phone){
        res.status(400);
        throw new Error("All feilds are mandatory.");
    }
    const contacti = await contact.create({
        name,
        email,
        phone,

    })
    res.status(200).json(contacti);
});
const getContact = asyncHandler(async(req,res)=>{
    const contact = await contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("contact not found" )
    }
    res.status(200).json(contact);
});
const updateContact =asyncHandler(async (req,res)=>{
    if (!contact) {
        res.status(404);
        throw new Error("contact not found" )
    }
    const updateContact = await findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updateContact);
});
const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:` delete contact ${req.params.id}`});
});
module.exports={ getContacts, updateContact, getContact, deleteContact, createContact};