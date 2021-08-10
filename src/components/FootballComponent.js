import React, { Component } from 'react';

import { Card, CardTitle, CardImg, Modal, ModalHeader, ModalBody, Form, FormGroup, 
    Input, Label, CardBody, Button, Col, Row } from 'reactstrap';
import { FOOTBALLINFO } from '../shared/footballleagueinfo'

import { MONTH } from '../shared/month';


class Football extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
            footballs: FOOTBALLINFO,
            isModalOpen: false,
            month: MONTH,
          
            

        };
        this.toggleModal = this.toggleModal.bind(this);
        
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }




    render() {

 
            
            
        

        const base = this.state.footballs.map(football => {
            return(
                    <React.Fragment>                      
                            <Card className='sport_card m-2'>
                            <CardTitle ><h2 className='sport_card_title mt-1 ml-2'>{football.name}</h2></CardTitle>
                                <div className='row'>
                                <div className='col-5 mb-2 mt-2 ml-2'>
                                    <CardImg className='image_for_sport'src={football.image}></CardImg>                                    
                                    <CardBody className='body_description'>
                                        {football.description}
                                        <Card className='mt-5'>                                    
                                            <Button className='register_button' onClick={this.toggleModal}>
                                        Sign-Up</Button> 
                                        </Card>
                                    </CardBody>            
                                </div>                                                                                                                                                
                                 <div className="col-5 mt-2 mb-2">
                                 <h5 className='rules_title'>Registration Includes</h5>
                                 <hr/>
                                    {football.registration.map(registration => 
                                    <li className='rules_list'>
                                        {registration}                           
                                    </li>)}  
                                    <hr/>  
                                    <h5 className='rules_title'>Required Equipment</h5>
                                    <hr/>
                                    {football.equipment.map(eq => 
                                    <li className='rules_list'>
                                        {eq}                           
                                    </li>)}
                                    <hr/>
                                    
                                </div>
                                </div>
                            </Card>                                                
                    </React.Fragment>
            )
        })

        return (
            <React.Fragment>
                <div className="container">
                    {base}
                </div>
                <Modal size='lg' isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className='form_title' toggle={this.toggleModal}><strong>Sign Up</strong></ModalHeader>
                    <ModalBody>
                        <Form>
                            <h4><strong className='form_title'>Child Information</strong></h4>
                            <Row form>
                                <Col md={5}>
                                    <FormGroup>
                                        <Label htmlFor='inputFirstName'>First Name</Label>
                                        <Input type='text' id='inputFirstName' name='inputFirstName' />                                  
                                    </FormGroup>
                                </Col>
                                <Col md={5}>
                                    <FormGroup>
                                        <Label htmlFor='inputLastName'>Last Name</Label>
                                        <Input type='text' id='inputLastName' name='inputLastName' />                                  
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label htmlFor='childGender'>Gender</Label>
                                        <Input type='select' id='childGender' name='childGender'>
                                            <option>Select...</option>                                  
                                            <option>Male</option>                                  
                                            <option>Female</option>                                  
                                            <option>Non-Binary</option>
                                        </Input>                                  
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                            <Col md={3}>
                                    <FormGroup>
                                        <Label htmlFor='childmonth'>Month</Label>
                                        <Input type='select' id='childMonth' name='childMonth'>
                                            {this.state.month.months.map(month=>{
                                                return(
                                                <option>{month}</option>
                                                )
                                            })}
                                        </Input>                                  
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label htmlFor='childDay'>Day</Label>
                                        <Input type='select' id='childDay' name='childDay'>
                                            {
                                              this.state.month.days.map(days => {
                                                  return(
                                                  <option>{days}</option>
                                                  )
                                              })  
                                            }
                                        </Input>                                  
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label htmlFor='childYear'>Year</Label>
                                        <Input type='select' id='childYear' name='childYear'>
                                            {
                                              this.state.month.years.map(years => {
                                                  return(
                                                  <option>{years}</option>
                                                  )
                                              })  
                                            }
                                        </Input>                                  
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={7}>
                                    <FormGroup>
                                        <Label htmlFor='childAddress'>Address</Label>
                                        <Input type='text' id='childAddress' name='childAddress' />                                 
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label htmlFor='childState'>State</Label>
                                        <Input type='select' id='childState' name='childState'>
                                            {
                                              this.state.month.state.map(states => {
                                                  return(
                                                  <option>{states}</option>
                                                  )
                                              })  
                                            }
                                        </Input>                                    
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label htmlFor='childZip'>Zip Code</Label>
                                        <Input type='text' id='childZip' name='childZip' />                                    
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                            <Col md={5}>
                                    <FormGroup>
                                        <Label htmlFor='childSport'>Sport</Label>
                                        <Input type='select' id='childSport' name='childSport'>
                                            {
                                              this.state.month.sport.map(sports => {
                                                  return(
                                                  <option>{sports}</option>
                                                  )
                                              })  
                                            }
                                        </Input>                                    
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label htmlFor='childSport'>Shirt Size</Label>
                                        <Input type='select' id='childSport' name='childSport'>
                                            {
                                              this.state.month.shirt.map(shirts => {
                                                  return(
                                                  <option>{shirts}</option>
                                                  )
                                              })  
                                            }
                                        </Input>                                    
                                    </FormGroup>
                                </Col>
                            </Row>
                            <h4><strong className='form_title'>Parent/Guardian Information</strong></h4>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label htmlFor='primaryContact'>Primary Contact</Label>
                                        <Input type='text' id='primaryContact' name='primaryContact' />                                  
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label htmlFor='primaryContactEmail'>Email</Label>
                                        <Input type='text' id='primaryContactEmail' name='primaryContactEmail' />                                  
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label htmlFor='primaryContactPhone'>Phone</Label>
                                        <Input type='text' id='primaryContactPhone' name='primaryContactPhone' />                                  
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label htmlFor='primaryContactVolunteer'>Can You Volunteer This Year?</Label>
                                        <Input type='select' id='primaryContactVolunteer' name='primaryContactVolunteer' multiple>
                                        {
                                              this.state.month.volunteer.map(volunteer => {
                                                  return(
                                                  <option>{volunteer}</option>
                                                  )
                                              })  
                                            }
                                        </Input>                                 
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button className='cancel_button mr-1'>Cancel</Button>
                            <Button className='submit_button'>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
               
            
        )
    }
}

export default Football;