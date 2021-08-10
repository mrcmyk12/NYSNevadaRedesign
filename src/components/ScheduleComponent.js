import React, { Component } from 'react';

import { SCHEDULE } from '../shared/schedule';
import { Card, CardTitle, CardBody} from 'reactstrap';
import { Link} from 'react-router-dom';
import { slideInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    slideInDown: {
      animation: 'x 1s',
      animationName: Radium.keyframes(slideInDown, 'slideInDown')
    }
  }



class Schedule extends Component {
    constructor(props){
        super(props);
        this.state = {

            schedule:SCHEDULE
           
        }
    }
    
    
    
    render() {

        
        const calendar = this.state.schedule.map((schedules) => {
        
        return(
        <StyleRoot style={styles.slideInDown}>
            <div className="container" key={schedules.id}>
                <div className="row center_text">
                    <h2 className='sport_card_title mt-1 ml-2'>{schedules.name}</h2>
                </div> 
            </div> 
            <div className="row center_text">
                <Card className='col mt-4 mb-4 schedule_card'>  
                <CardTitle><h6 className='schedule_card_title'>Sun</h6></CardTitle>              
                        {schedules.sunday.map((act)=>{
                            return(
                                <CardBody>
                                <Link><p className='calendar_day_text'>{act}</p></Link>
                                </CardBody>                             
                            )
                        })}                 
                </Card>
                <Card className='col mt-4 mb-4 schedule_card'> 
                <CardTitle><h6 className='schedule_card_title'>Mon</h6></CardTitle>                
                        {schedules.monday.map((act)=>{
                            return(
                                <CardBody>
                                    <Link><p className='calendar_day_text'>{act}</p></Link>
                                </CardBody>                             
                            )
                        })}                 
                </Card>
                <Card className='col mt-4 mb-4 schedule_card'>
                <CardTitle><h6 className='schedule_card_title'>Tues</h6></CardTitle>                 
                        {schedules.tuesday.map((act)=>{
                            return(
                                <CardBody>
                                    <Link><p className='calendar_day_text'>{act}</p></Link>
                                </CardBody>                             
                            )
                        })}                 
                </Card>
                <Card className='col mt-4 mb-4 schedule_card'>
                <CardTitle><h6 className='schedule_card_title'>Wed</h6></CardTitle>                 
                        {schedules.wednesday.map((act)=>{
                            return(
                                <CardBody>
                                    <Link><p className='calendar_day_text'>{act}</p></Link>
                                </CardBody>                             
                            )
                        })}   
                </Card>
                <Card className='col mt-4 mb-4 schedule_card'>
                <CardTitle><h6 className='schedule_card_title'>Thurs</h6></CardTitle>                 
                        {schedules.thursday.map((act)=>{
                            return(
                                <CardBody>
                                <Link><p className='calendar_day_text'>{act}</p></Link>
                                </CardBody>                             
                            )
                        })}                 
                </Card>
                <Card className='col mt-4 mb-4 schedule_card'>
                <CardTitle><h6 className='schedule_card_title'>Fri</h6></CardTitle>                 
                    {schedules.friday.map((act)=>{
                        return(
                            <CardBody>
                                <Link><p className='calendar_day_text'>{act}</p></Link>
                            </CardBody>                             
                        )
                    })}             
                </Card>
                <Card className='col mt-4 mb-4 schedule_card'>
                <CardTitle><h6 className='schedule_card_title'>Sat</h6></CardTitle>                 
                    {schedules.saturday.map((act)=>{
                        return(
                            <CardBody>
                                <Link><p className='calendar_day_text'>{act}</p></Link>
                            </CardBody>                             
                        )
                    })}             
                </Card>
            </div>                         
        </StyleRoot>
        )
    })

    

        return(
            <StyleRoot style={styles.slideInDown}>
           <div className="container">
                <div className='row'>
                    {calendar} 
                </div>
            </div> 
            </StyleRoot>
        )

        

    }
}

export default Schedule;