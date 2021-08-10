import React, { Component } from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import RenderModal from './RenderModalComponent';
import { bounceInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


import { UNIFORM } from '../shared/orderinfo';

const styles = {
    bounceInRight: {
      animation: 'x 2s',
      animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
    }
  }
  

class Order extends Component{
    constructor(props) {
        super(props);

            this.state = {
                uniforms:UNIFORM,
                isModalOpen:false
            }
            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

            render() {

            const uniforms = this.state.uniforms.map((uniform)=>{
            return(
                    <React.Fragment>
                 
                        <div className="col" >
                            <Card body className='mb-5'>                                                                
                                <CardImg top width='100%' src={uniform.image}/>
                                <CardTitle className='card_title'>{uniform.name}</CardTitle>
                                <RenderModal uniform={uniform}/>                               
                            </Card>
                        </div>

                    </React.Fragment>
                )
            }
        )

            return(
                <StyleRoot>
                <React.Fragment>
                    <div className='row' style={styles.bounceInRight}>
                        {uniforms}
                    </div>
                    
                </React.Fragment>
                </StyleRoot>
            )
        }
    
}

export default Order;