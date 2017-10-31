import React, {Component} from 'react';
import Particles from 'react-particles-js';

class Landing extends Component {
    render() {
        return(
            <div>
                <div className='landing-title' >
                    <h1>RESTORE</h1>
                    <h4>Recover. Suppress. Transform. Overcome. Renew. Elevate.</h4>
                    
                </div>
                <Particles params={{particles: {line_linked: {shadow: {enable: true, color: "#ffffff", blur: 1}}}}}/>
            </div>
        );
    };
}
export default Landing;