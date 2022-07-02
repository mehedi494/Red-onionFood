import React from 'react';
import { Card } from 'react-bootstrap';



const LunchDisplay = (props) => {
    const { img, name, caption, price } = props?.food;
    return (
        <Card className=' col-6 gy-4 text-center card-container ' style={{ width: '18rem' }}>
            <Card.Img variant="top" className='w-75 rounded mx-auto d-block ' src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{caption}
                </Card.Text>
                <h4>$<b>{price}</b></h4>

            </Card.Body>
        </Card>
    );
};

export default LunchDisplay;