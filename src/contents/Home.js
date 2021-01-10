import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/48373617_2543686812324945_2788948322306490368_o.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Milos Katic','I am a frontend web developer']} speed={86} eraseDelay={600}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    