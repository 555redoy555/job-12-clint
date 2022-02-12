import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProducts.css'

const HomeProducts = () => {

    const [cars, setCars] = useState([])



    useEffect(() => {
        fetch(`https://salty-brook-20691.herokuapp.com/Cars`)
            .then(res => res.json())
            .then(data => {
                setCars(data.slice(0, 6));
            });
    }, [])
    console.log(cars)


    return (
        <div  >

            <h1 className='text-center my-5 font-semibold text-2xl' >HERE SOME PRODUCTS</h1>

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

            <Container>
                <div className="text-center my-8">
                    <Button type='button' className='btn border-red-300 hover:orange-300'>
                        <Link to={'/explore'} className='font-medium  text-orange-600 text-2xl text-center' >Explore More Cars.....</Link>
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default HomeProducts;