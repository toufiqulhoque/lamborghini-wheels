import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
const AllCars = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://limitless-peak-03324.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));

    },
        []);

    // const handleAddToCart = (index, email) => {
    //     const item = services[index]
    //     const data = { item, email };
    //     fetch(`http://localhost:5000/addOrders`, {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(data),
    //     })
    //         .then((res) => res.json())
    //         .then((result) => {
    //             console.log(result);
    //             if (result.insertedId) {
    //                 alert("add to cart");
    //             } else {
    //                 alert("add korte pari nai");
    //             }
    //         });
    // }
    return (
        <div>
            <div className='background'>
                <Container>
                    <h2 className='py-3 text-white'>Available Cars</h2>
                    <Row xs={1} lg={3} className="g-3">
                        {

                            services.length === 0 ? <Spinner className='mx-auto' animation="border" /> : services.map((service, index) => <Col key={service._id} className='p-3 ' >
                                <Card className='h-100 hover-card card-border' >
                                    <Card.Img className='img1  ' variant="top" src={service.image} height='300' />
                                    <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>
                                            <p className='text-muted'>{service.bodytype}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>{service.description}</p>
                                        </Card.Text>
                                        {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                                        <br />
                                        {/* <Link to={`/order/${service._id}`}>
                                    <button className="btn btn-warning">Detail</button>
                                </Link> */}
                                        <Link to={`/services/${service._id}`}>
                                            <Button variant="outline-warning">
                                                Confirm Order
                                            </Button>
                                        </Link>



                                    </Card.Body>
                                </Card>
                            </Col>

                            )

                        }

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AllCars;