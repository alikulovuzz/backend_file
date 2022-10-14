process.env.NODE_ENV = 'test';

// let mongoose = require("mongoose");
// let Book = require('../app/models/book');

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('User', () => {

    describe('/POST user', () => {
        it('it is creating new user', (done) => {
            let user = {
                first_name: "Anvar",
                last_name: "Mamarasulov",
                father_name: "Ani",
                email: "azamaat.aliaqulov@list.ru",
                img_id: "https:/",
                phone: "99-891-6984",
                password: "6498723",
                role: "client"
            }
            chai.request(app)
                .post('/client/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('password');//.eql('Book successfully added!');
                    res.body.should.have.property('token');
                    // res.body.book.should.have.property('token');
                    res.body.should.have.property('role')//.eql(['client','tasker']);
                    // res.body.book.should.have.property('year');
                    done();
                });
        });
        it('it is creating new user', (done) => {
            let user = {
                first_name: "Anvar",
                last_name: "Mamarasulov",
                father_name: "Ani",
                email: "azamat.aliqulov@list.ru",
                img_id: "https:/",
                phone: "99-891-7974",
                password: "6498723",
                role: "client"
            }
            chai.request(app)
                .post('/client/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });
        // it('it should POST a book ', (done) => {
        //     let book = {
        //         title: "The Lord of the Rings",
        //         author: "J.R.R. Tolkien",
        //         year: 1954,
        //         pages: 1170
        //     }
        //     chai.request(server)
        //         .post('/book')
        //         .send(book)
        //         .end((err, res) => {
        //             res.should.have.status(200);
        //             res.body.should.be.a('object');
        //             res.body.should.have.property('message').eql('Book successfully added!');
        //             res.body.book.should.have.property('title');
        //             res.body.book.should.have.property('author');
        //             res.body.book.should.have.property('pages');
        //             res.body.book.should.have.property('year');
        //             done();
        //         });
        // });
    });
    // describe('/GET book', () => {
    //     it('it should GET all the books', (done) => {
    //         chai.request(server)
    //             .get('/book')
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('array');
    //                 res.body.length.should.be.eql(0);
    //                 done();
    //             });
    //     });
    // });
    // describe('/GET/:id book', () => {
    //     it('it should GET a book by the given id', (done) => {
    //         let book = new Book({ title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, pages: 1170 });
    //         book.save((err, book) => {
    //             chai.request(server)
    //                 .get('/book/' + book.id)
    //                 .send(book)
    //                 .end((err, res) => {
    //                     res.should.have.status(200);
    //                     res.body.should.be.a('object');
    //                     res.body.should.have.property('title');
    //                     res.body.should.have.property('author');
    //                     res.body.should.have.property('pages');
    //                     res.body.should.have.property('year');
    //                     res.body.should.have.property('_id').eql(book.id);
    //                     done();
    //                 });
    //         });

    //     });
    // });
    // describe('/PUT/:id book', () => {
    //     it('it should UPDATE a book given the id', (done) => {
    //         let book = new Book({ title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1948, pages: 778 })
    //         book.save((err, book) => {
    //             chai.request(server)
    //                 .put('/book/' + book.id)
    //                 .send({ title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1950, pages: 778 })
    //                 .end((err, res) => {
    //                     res.should.have.status(200);
    //                     res.body.should.be.a('object');
    //                     res.body.should.have.property('message').eql('Book updated!');
    //                     res.body.book.should.have.property('year').eql(1950);
    //                     done();
    //                 });
    //         });
    //     });
    // });
    // /*
    //  * Test the /DELETE/:id route
    //  */
    // describe('/DELETE/:id book', () => {
    //     it('it should DELETE a book given the id', (done) => {
    //         let book = new Book({ title: "The Chronicles of Narnia", author: "C.S. Lewis", year: 1948, pages: 778 })
    //         book.save((err, book) => {
    //             chai.request(server)
    //                 .delete('/book/' + book.id)
    //                 .end((err, res) => {
    //                     res.should.have.status(200);
    //                     res.body.should.be.a('object');
    //                     res.body.should.have.property('message').eql('Book successfully deleted!');
    //                     res.body.result.should.have.property('ok').eql(1);
    //                     res.body.result.should.have.property('n').eql(1);
    //                     done();
    //                 });
    //         });
    //     });
    // });
});