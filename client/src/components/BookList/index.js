import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

const  BookList =({ children })=> {
  return (
      <div>
    <div className="media">
                      
    <img src="..." className="mr-3" alt="..." />
    <div className="media-body">
        <h5 className="mt-0">Media heading</h5>
        <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    </div>
    <div>
        <button className="btn btn-sm btn-success">Save</button>
        <button className="btn btn-sm btn-danger">Delete</button>
    </div>
</div>
<div className="line"><hr></hr></div>
</div>
  )
}
export default BookList;
