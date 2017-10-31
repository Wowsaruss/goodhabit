import React, {Component} from 'react';
import Particles from 'react-particles-js';

class Landing extends Component {
    render() {
        return(
            <div>
                <div className='landing-title' >
                    <div><h1>RESTORE</h1></div>
                    <div className='subtitle'><h4>RECOVER.&ensp; SURPRESS.&ensp; TRANSFORM.&ensp; OVERCOME.&ensp; RENEW.&ensp; ELEVATE.</h4>
                    <div className="loginBtn"><a className="auth1" href={`${process.env.REACT_APP_HOST}/auth`}><div>Start Now</div></a></div></div>
                </div>
                <Particles params={{particles: {line_linked: { shadow: { enable: true, color: "#3CA9D1", blur: 5}}}}} style={{width: '100%'}} />
            </div>
        );
    };
}
export default Landing;