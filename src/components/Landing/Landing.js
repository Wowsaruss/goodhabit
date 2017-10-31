import React, {Component} from 'react';
import Particles from 'react-particles-js';
import axios from 'axios'


class Landing extends Component {
    constructor() {
        super()
          this.state = {
            quote: [],
          }
        }

        componentDidMount(){
            axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1%27', {
                headers: {
                    withCredentials: false,
                 'Access-Control-Allow-Origin': '*'
                    }
              }).then( (response) => {
                    this.setState({
                    quote: response.data
          
        })
    })
    }
    render() {

        var quote = this.state.quote.map((quote) => {
            return (
                <div>
                    {quote.content}
                    </div>
            )
        })
        console.log(this.state.quote)
        return(
            <div>
                <div className='landing-title' >
                    <h1>RESTORE</h1>
        {quote}
                    <h4>Recover. Suppress. Transform. Overcome. Renew. Elevate.</h4>
                </div>
                <Particles params={{particles: {line_linked: {shadow: {enable: true, color: "green", blur: 1}}}}}/>
            </div>
        );
    };
}
export default Landing;