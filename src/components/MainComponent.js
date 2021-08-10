import React, { Component } from 'react';


import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Sport from './SportComponent';
import Baseball from './BaseballComponent';
import Football from './FootballComponent';
import Soccer from './SoccerComponent';
import Basketball from './BasketballComponent';
import Cheerleader from './CheerleadingComponent';
import FlagFootball from './FlagFootballComponent';
import Volleyball from './VolleyballComponent';
import Schedule from './ScheduleComponent';
import Order from './UniformComponent';


import { Switch, Route, Redirect, } from 'react-router-dom'; 


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {

        const HomePage = () => <Home />

       

        return(
        <React.Fragment>
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/sport' component={Sport} />
                        <Route exact path='/Baseball' component={Baseball} />
                        <Route exact path='/Tackle-Football' component={Football} />
                        <Route exact path='/Soccer' component={Soccer} />
                        <Route exact path='/Basketball' component={Basketball} />
                        <Route exact path='/Cheerleading' component={Cheerleader} />
                        <Route exact path='/Flag-Football' component={FlagFootball} />
                        <Route exact path='/Volleyball' component={Volleyball} />
                        <Route exact path='/schedule' component={Schedule} />
                        <Route exact path='/order' component={Order} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        </React.Fragment>
        )
    }
}

export default Main;