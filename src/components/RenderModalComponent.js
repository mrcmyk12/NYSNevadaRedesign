import React, { useState } from 'react';
import { Button, Modal, ModalHeader, Card, CardBody, CardImg, CardImgOverlay,
 FormGroup, Form, Label, Input} from 'reactstrap';



function RenderModal(props) {

    const [modal, setModal ] = useState(false);
   


    const toggle = () => setModal(!modal);


    return(
        <React.Fragment>
            <Button className='register_button' onClick={toggle}>
                Order
            </Button>
            <Modal size='sm' isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}></ModalHeader>
                <Card>   
                    <div className="col">
                        <CardImg top className='uniform_images' src={props.uniform.image} />
                        <CardImgOverlay className='uniform_price'>{props.uniform.price}</CardImgOverlay>
                    </div>
                    <CardBody>
                        <h5 className='rules_title'>{props.uniform.name} Jersey</h5>
                        <Form>
                           <FormGroup>
                               <Label><h6 className='form_title'><strong>Size</strong></h6></Label>
                               <Input type='select' name='size' id='size'>
                                    {props.uniform.size.map((size) => {
                                        return(
                                            <option className='welcome_paragraph'>{size}</option>
                                        )
                                    })}
                               </Input>
                           </FormGroup> 
                        </Form>
                        <Button onClick={toggle} className='register_button'>Add To Cart</Button>
                    </CardBody>
                </Card> 
            </Modal>
        </React.Fragment>
    )

}

export default RenderModal;
