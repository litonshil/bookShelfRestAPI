const Book = require('../models/Book')
const getAllBookController = (req,res,next) => {
    Book.find()
        
    .then(books => {
        res.status(200).json({
            message: 'All Books',
            books
        })

    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: 'Error Occured',
            error: err
        })
    })
}

const postNewBookController = (req,res,next) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        authorEmail: req.body.authorEmail,
        publication: req.body.publication
    })
    book.save()
        .then(data => {
            res.status(201).json({
                message: 'Book Info Added',
                book: data
            })

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                error: err
            })
        })
}

const getSingleBookController = (req,res,next) => {
    let id = req.params.id
    Book.findById(id)
        .then(book => {
            res.status(200).json({
               book 
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                error: err
            })
        })
}

const deleteContactController = (req,res,next) => {
    let id = req.params.id

    Book.findByIdAndRemove(id)
        .then(result => {
            res.json({
                message: 'Book Deleted',
                result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                error: err
            })
        })
}

const editBookController = (req,res,next) => {
    let id = req.params.id

    let updatedBook = {
        name: req.body.name,
        author: req.body.author,
        authorEmail: req.body.authorEmail,
        publication: req.body.publication
    }

    Book.findByIdAndUpdate(id, {$set: updatedBook})
        .then(book => {
            Book.findById(book._id)
                .then(newBook => {
                    res.json({
                        message: 'Updated Successfully',
                        newBook
                    })
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                error: err
            })
        })
}

module.exports = {
    getAllBookController,
    postNewBookController,
    getSingleBookController,
    deleteContactController,
    editBookController
}