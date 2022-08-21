import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BreakFastDisplay.css';

const BreakFastDisplay = (props) => {
    const { id,img, name, caption, price } = props?.food;
    return (
        
            <Card className='col-3 gy-4 text-center card-container' style={{ width: '18rem' }}>
                <Card.Img variant="top" className='w-75 rounded mx-auto d-block ' src={img} />
                <Card.Body>
                <h1 style={{ fontSize: "13px" }}>{name}</h1>
                    <p style={{fontSize:"12px"}}>{caption} </p>
                <h6>$<b>{price}</b></h6>
                <Link to={`/food/${id}`}>
                    <button className='btn btn-info text-white'>
                        view more
                    </button>
                    
                </Link>

                </Card.Body>
            </Card>
        
    );
};

export default BreakFastDisplay;

