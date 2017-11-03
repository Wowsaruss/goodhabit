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
                    <div><h1>RESTORE</h1></div>
                    <div className='subtitle'><h4>RECOVER.&ensp;&ensp; SURPRESS.&ensp;&ensp; TRANSFORM.&ensp;&ensp; OVERCOME.&ensp;&ensp; RENEW.&ensp;&ensp; ELEVATE.</h4>
                    <div className="loginBtn"><a className="auth1" href={`${process.env.REACT_APP_HOST}/auth`}><div>Start Now</div></a></div></div>
                </div>
                <Particles params={{particles: {line_linked: { shadow: { enable: true, color: "#3CA9D1", blur: 5}}}}} style={{width: '100%'}} />

                <div className="landingFParent">
                    <div className="landingFoot">
                        <div className="AU"><Link className="Link" to="aboutus"><div>About Us</div></Link></div>
                    </div>
                </div>
            </div>
        );
    };
}
export default Landing;