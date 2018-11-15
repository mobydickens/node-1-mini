let books = [];

let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },
    create: (req, res) => {
        // console.log("should be body", req.body);
        let book = {
            title: req.body.title,
            author: req.body.author,
            id: id
        }
        books.push( book );
        id++;
        res.status(201).send(books);
    },
    update: (req, res) => {
        //find book from passed in ID
        let passedIndex = Number(req.params.id);
        let bookIndex = books.findIndex(book => book.id === passedIndex);
        if(bookIndex === -1) {
            res.status(404).send({"error": "not existing etc"});
            return;
        }
        books[bookIndex] = {
            title: req.body.title,
            author: req.body.author,
            id: passedIndex
        }
        res.status(200).send(books);
    },  
    delete: (req, res) => {
        let passedIndex = Number(req.params.id);
        books = books.filter(book => book.id !== passedIndex);
        res.status(200).send(books);
    }
}
