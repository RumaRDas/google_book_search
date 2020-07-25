import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';
import Search from '../components/Search';
import BookList from '../components/BookList';
import Api from '../utils/Api'

import '../style/App.css'


const Dashboard = () => {

    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("Harry potter")


    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = () => {
        Api.getGoogleBooks(search)
            .then(res => setBooks(res.data.items))
            .catch(err => console.log(err));
        console.log(setBooks)
    }
    const onInputChange = (e) => {
        setSearch(e.target.value);
    }

    const searchClick = () => {
        loadBooks()
    }
    const deleteBook = (id) => {
        Api.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }
    const saveBook = (data) => {

        Api.saveBook(
            {
                googleId: data.id,
                title: data.title,
                author: data.author,
                descriptin: data.description,
                image: data.imageLink,
                link: data.link
            }
        )
            .then(res => setBooks())
            .catch(err => console.log(err));
    }
    // const getSavebook = () => {
    //     Api. getAllBook()
    //     .then(res =>setBooks(res.data))
    //     .catch(err => console.log(err));
    //     console.log(setBooks)
    // }

    return (
        <>
            <Search search={search} onInputChange={onInputChange} searchClick={searchClick} />
            <Container >
                <Row >
                    <Col size="md-12">
                        <BookList books={books} saveBook={saveBook} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard
