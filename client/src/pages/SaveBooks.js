import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';
import Api from '../utils/Api'

import '../style/App.css'


const SaveBooks = () => {
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        getSavebook()   
    }, [])

    const deleteBook = (id) => {
        Api.deleteBook(id)
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    }

    const getSavebook = () => {
        Api. getAllBook()
        .then(res =>setBooks(res.data))
        .catch(err => console.log(err));
        console.log(setBooks)
    }

    return (
                
            <Container >
                <Row >
                    <Col size="md-12">
                    <div>
                    {
                       books.map(book => (
                            <div className="media ">
                                <div key={book._id}></div>
                                <div className="media-body">
                                    <h3 className="mt-0 titleStyle">{book.title}</h3>
                                    <h5 className="mt-0 mb-3"> Author: {book.authors}</h5>
                                    <div className="row">
                                        <div className="col col-md-12">
                                            <img src={book.image} className="mr-3 textWrap" />
                                            <p>{book.description}</p>
                                            <a href={book.infoLink}>Learn More </a>
                                        </div>
                                    </div>
                                    <div className="saveBtn">
                                  <button className="btn btn-sm btn-danger" onClick={() => deleteBook(book.id)}>Delete</button>                                                            
                                    </div>
                                    <div className="line"><hr /></div>
                                </div>
        
                            </div>
                        )
                        )
                    }
                </div>
                </Col>
                </Row>
            </Container>
  
    )
}

export default SaveBooks;
