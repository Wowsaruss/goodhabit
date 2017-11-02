import React, {Component} from 'react';
import axios from 'axios'
// import {Link} from 'react-router-dom'
class editprofile extends Component {
    constructor() {
        super()
          this.state = {
            username: '',
          }
        }
        editProfile(profile){
            axios.put('http://localhost:3080/api/profiles', {
              username: this.state.username,
            })
          }
          updateUsername(input){
              this.setState({
                  username: input
              })
          
        }

          render() {
            console.log(this.state)
            return(
                <div>
                <h3> Edit Username </h3>
                <input/>
                </div>
    
            )
        }
    }
    export default editprofile;