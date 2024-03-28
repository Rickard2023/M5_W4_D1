import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Comments
 from './Comments';
export default function SingleBook({book}) {

  const {id, asin, title, img} = book;

  const [selected, setSelected] = useState(false);
  function handleSelected()
  {
    let prev = selected;
    setSelected(!prev);
    console.log(selected);
  }

  return (
    <Col md={2} id={id}  onClick={handleSelected}>
    <Card style={{ width: "18rem" }} className={selected ? "p-4 ms-4 md-4 card-border selected" : "p-4 ms-4 md-4 card-border"} >
        <Card.Img variant="404" src={img} height={150} width={150} />
        <Card.Body>
            <Card.Title className="text-warning">{title}</Card.Title>
            <Card.Text>
            {title}                 
            </Card.Text>
            {selected && <Comments/>}
            <Button variant="primary">Post Comment</Button>
        </Card.Body>
    </Card>
    </Col>   
  );
}
