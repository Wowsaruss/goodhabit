import React, {Component} from 'react';
import Particles from 'react-particles-js';
import {Link} from 'react-router-dom';


class Landing extends Component {
    constructor() {
        super()
          this.state = {
            
          }
        }

    render() {

    
        return(
            <div className="Landingbg">
                <div className='landing-title' >
                    <div>
                        <h1>RESTORE</h1>
                    </div>
                    <div className='subtitle'>
                        <h4>RECOVER.&ensp;&ensp; SURPRESS.&ensp;&ensp; TRANSFORM.&ensp;&ensp; OVERCOME.&ensp;&ensp; RENEW.&ensp;&ensp; ELEVATE.</h4>
                        <button className='login-btn'>
                            <a className='link' href={`${process.env.REACT_APP_HOST}/auth`}>
                                Start Now
                            </a>
                        </button>
                        <button className='about-us' >
                            <Link className="link" to="aboutus">
                                About Us
                            </Link>
                        </button>
                    </div>
                </div>
                <Particles 
                    params={{
                        particles: {
                            line_linked: {
                                enable: true,
                                shadow: {
                                    enable: true,
                                    color: "rgb(255, 255, 75)",
                                    blur: 1
                                    }
                                }
                            }
                        }}
                    style={{
                        width: '100%',
                        height: '100vh'
                        }}
                />
            </div>
        );
    };
}
export default Landing;