import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './ExploreCars.css'

const ExploreCars = () => {
    const [cars, setCars] = useState([])



    useEffect(() => {
        fetch(`https://salty-brook-20691.herokuapp.com/Cars`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
            });
    }, [])
    console.log(cars)
    return (
        <div>
            <Navigation></Navigation>
            <div class="bg-fixed  back ">
                {
                    cars.map(car =>
                        <Container>
                            <Row xs={1} md={2} className="g-4">
                                {Array.from({ length: 2 }).map((_, idx) => (
                                    <Col>
                                        <Card className='m-3 hover-class border-double border-orange-100 shadow-xl'>
                                            <Card.Img className='p-3' variant="top" src={car.img} />
                                            <Card.Body>
                                                <Card.Title>{car.name}</Card.Title>
                                                <Card.Text>
                                                    Price: {car.price}
                                                </Card.Text>
                                                <Card.Text>
                                                    Body-Type:  {car.BodyType}
                                                </Card.Text>
                                            </Card.Body>
                                            <Link to={`details/${car._id}`} >
                                                <Button className='text-black ml-4 mb-4 bg-orange-300 border-orange-400' >Buy Now </Button>
                                            </Link>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    )
                }
            </div>
        </div>
    );
};

export default ExploreCars;