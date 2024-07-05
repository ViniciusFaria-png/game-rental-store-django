import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addGame } from '../services/GameService';


const AddGameModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addGame(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Add Game");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Game Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="GameName">
                                    <Form.Label>Game Name</Form.Label>
                                    <Form.Control type="text" name="GameName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name="Description" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="ReleaseDate">
                                    <Form.Label>Release Date</Form.Label>
                                    <Form.Control type="date" name="ReleaseDate" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Genre">
                                    <Form.Label>Genre</Form.Label>
                                    <Form.Control type="text" name="Genre" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="RentPrice">
                                    <Form.Label>Rent Price</Form.Label>
                                    <Form.Control type="text" name="RentPrice" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="IsFree">
                                    <Form.Label>Is Free</Form.Label>
                                    <Form.Control type="checkbox" name="IsFree" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddGameModal;