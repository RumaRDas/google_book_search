import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Grid';
import Search from '../components/Search';
import BookList from '../components/BookList';
import '../style/App.css'
const Dashboard = () => {

    // Setting our component's initial state
    // const [books, setBooks] = useState([])
    // const [search, setSearch] = useEffect("")

    return (
        <>
            <Search />
            <Container >
                <Row >
                    <Col size="md-12">
                        <BookList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard
