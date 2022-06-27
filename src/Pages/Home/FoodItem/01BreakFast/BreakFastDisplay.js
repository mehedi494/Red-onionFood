import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BreakFastDisplay = (props) => {
    const { img, name, caption, price } = props?.food;
    return (
        <Card className='col-3 gy-4' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{caption}
                </Card.Text>
                <h4>$<b>{ price}</b></h4>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default BreakFastDisplay;

