import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Comments from "./Comments";
import SingleBook from "./SingleBook";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Row from "react-bootstrap/Row";

export default function AllTheBooks({ allBooks }) {
  /*  
    Per renderizzare un array devi usare questa sintassi:
    {array.map(el => (PARENTESI TONDE) )}
    e non 
    {array.map(el => {PARENTESI GRAFFE} )}
  */
  return (

    <Row>
        {allBooks.map((el) => (          
            <SingleBook 
              clicked={false}
              key={el.asin} 
              book={el}
            />              
        ))}
    </Row>

  );
}
