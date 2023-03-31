const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET/api/contacts
//@access piblic
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc create New Contact
//@route GET/api/contacts
//@access piblic
const createContact = asyncHandler(async(req, res) => {
    console.log("The req body is : ", req.body);
    const {name, email, phone } = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact);
});

//@desc Get Contacts
//@route GET/api/contacts/:id
//@access piblic
const getContact =asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc update Contacts
//@route PUT/api/contacts/:id
//@access piblic
const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({"message":`Update contact for ${req.params.id}`});
});

//@desc Delete Contact
//@route DELETE/api/contacts/:id
//@access piblic
const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({"message":`Delete contact for ${req.params.id}`});
});

module.exports = { getContact, createContact,deleteContact,updateContact,getContacts };