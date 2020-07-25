import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

const BookList = (props) => {

    return (
        <div>
            {
                props.books.map(book => (
                    <div className="media ">
                        <div key={book.id}></div>
                        <div className="media-body">
                            <h3 className="mt-0 titleStyle">{book.volumeInfo.title}</h3>
                            <h5 className="mt-0 mb-3"> Author: {book.volumeInfo.authors}</h5>
                            <div className="row">
                                <div className="col col-md-12">
                                    <img src={book.volumeInfo.imageLinks.thumbnail} className="mr-3 textWrap" />
                                    <p>{book.volumeInfo.description}</p>
                                    <a href={book.volumeInfo.infoLink}>Learn More </a>
                                </div>
                            </div>
                            <div className="saveBtn">
                           <button className="btn btn-sm btn-success" onClick={() => props.saveBook(book)}>Save</button>                         
                            </div>
                            <div className="line"><hr /></div>
                        </div>

                    </div>
                )
                )
            }
        </div>
    )
}
export default BookList;
