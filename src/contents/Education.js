import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bachelor in Electrical and Computer Engineering " where="VTSSA, Sabac" from="2011" to="2015"/>
            <Widecard title="Front-end web development course" where="Ftn informatika, Novi Sad" from=" october 2018" to=" january 2019"/>
            </div>
            )
        }
    }
    
export default Education
    