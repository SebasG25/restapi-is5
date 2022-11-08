const { handleHttpError } = require('../utils/handleError')
const { contactsModel } = require('../models')

/**
 * It's an async function that gets all the contacts from the database and sends them back to the
 * client.
 * @param req - The request object.
 * @param res - The response object.
 */
const getContacts = async (req, res) => {
    try {
        const data = await contactsModel.find({})
        res.send({ contactsData: data })
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_CONTACTS')
    }
}

/**
 * It takes a request and a response, and then it finds a contact by id, and then it sends the data
 * back to the client.
 * @param req - request
 * @param res - the response object
 */
const getContact = async (req, res) => {
    try {
        const { id } = req.params
        const data = await contactsModel.findById(id)
        res.send({ contactData: data })
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_CONTACT')
    }
}

/**
 * It takes the request body, and creates a new contact in the database.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const addContact = async (req, res) => {
    try {
        const { body } = req
        const data = await contactsModel.create(body)
        res.send({ contactData: data })
    } catch (error) {
        handleHttpError(res, 'ERROR_ADD_CONTACT')
    }
}

/**
 * It takes a request and a response, and then it finds a contact by its id and updates it with the
 * body of the request.
 * @param req - The request object.
 * @param res - The response object.
 */
const updateContact = async (req, res) => {
    try {
        const { body, params } = req
        const { id } = params
        const data = await contactsModel.findByIdAndUpdate(id, body)
        res.send({ contactData: data })
    } catch (error) {
        handleHttpError(res, 'ERROR_UPDATE_CONTACT')
    }
}

/**
 * It deletes a contact from the database.
 * @param req - request
 * @param res - The response object.
 */
const deleteContact = async (req, res) => {
    try {
        const { id } = req.params
        const data = await contactsModel.findByIdAndDelete(id)
        res.send({ contactData: data })
    } catch (error) {
        handleHttpError(res, 'ERROR_DELETE_CONTACTS')
    }
}

module.exports = { getContacts, getContact, addContact, updateContact, deleteContact }