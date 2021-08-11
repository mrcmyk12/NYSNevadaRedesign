import React, { Component } from 'react';

import { Card, CardImg, } from 'reactstrap';

import { SPORTSCARDS } from '../shared/sportscards';
import { bounceInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Link } from 'react-router-dom';

const styles = {
    bounceInLeft: {
      animation: 'x 2s',
      animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
    }
  }
  


class Sport extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            
            sportscards:SPORTSCARDS,

        };
        
    }

    
    

    render() {

        const sport = this.state.sportscards.map(sportscard => {
            return(
                
     
                        <div className='col-sm-12 col-md'>
                            <Link to={`/${sportscard.name}`}>
                            <Card key={sportscard.id} className='sport_card mb-2 m-1'>
                                    <CardImg className='sport_card_image'src= {sportscard.image}></CardImg>
                            </Card>
                            <h5 className='card_title mb-5'>{sportscard.name}</h5>
                            </Link>
                        </div>    

                
            )
        })

        return (
        <StyleRoot style={styles.bounceInLeft}>       
            <div className='row' style={{height:'400px'}} >
                {sport}
            </div>        
        </StyleRoot> 
        )
    }
}
    
     
 


export default Sport;