import React, { Component } from 'react';
import MyRouter from './MyRouter'
import list from './routerConfig'
import { BrowserRouter as Router } from "react-router-dom"
class RooterRooter extends Component {
    render() {
        // console.log(1111111111111111111)
        return (
            <Router >
              <MyRouter routerList={list}></MyRouter>  
            </Router>
        );
    }
}

export default RooterRooter;