import React from 'react';
import { Card, Container } from 'react-bootstrap';

const InSport = () => {
    return (
        <div className='mb-10'>

            <Container>
                <h1 className='mt-5 mb-3 font-semibold text-2xl' >In the spotlight</h1>

                <div className="row">
                    <div className="col-md-9">
                        <Card className="text-black font-semibold rounded-2xl">
                            <Card.Img style={{ "height": "300px", }} className='img w-100 rounded-2xl' src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Last minute deals</Card.Title>
                                <Card.Text>
                                    No time like the present! Celebrate the moment with an unexpected getaway.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className="text-white rounded-2xl">
                            <Card.Img style={{ "height": "300px", }} className='img w-100 rounded-2xl' src="https://s0.2mdn.net/10257150/CF-ATA-403-046-Expedia-Travelocity-300x250-fofoti.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title></Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Card.Text></Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default InSport;