import React, {useState} from 'react';

import { Modal, ModalFooter, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';


function Login(){

    const [modal, setModal ] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <React.Fragment>
            <Button onClick={toggle} className='m-2 login_button'>Login</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><h4 className='rules_title'>Log In</h4></ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Email Address</Label>
                            <Input type='email' name='email' id='email' />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type='password' name='password' id='password' />
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

export default Login;

