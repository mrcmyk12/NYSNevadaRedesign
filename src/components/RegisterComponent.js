import React, {useState} from 'react';

import { Modal, ModalFooter, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';



function Register(){

    const [modal, setModal ] = useState(false);

    const toggle = () => setModal(!modal);


    return(
        
        <React.Fragment>

            <Button onClick={toggle} className='m-2 register_button'>Create Account</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalBody>
                        <ModalHeader toggle={toggle}><h4 className='rules_title'>Create Account</h4></ModalHeader>
                        <Form>
                            <FormGroup>
                                <Label>Email Address</Label>
                                <Input type='email' name='email' id='email' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type='password' name='password' id='password' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Confirm Password</Label>
                                <Input type='confirmPassword' name='confirmPassword' id='confirmPassword' />
                            </FormGroup>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input type='firstName' name='firstName' id='firstName' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input type='lastName' name='lastName' id='lastName' />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={toggle} className='cancel_button'>Cancel</Button>
                        <Button onClick={toggle} className='submit_button'>Submit</Button>
                    </ModalFooter>
                </Modal>
        </React.Fragment>
    )
}

export default Register;