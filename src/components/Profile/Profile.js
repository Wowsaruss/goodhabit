import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Profile extends Component {
    constructor() {
        super()
          this.state = {
            username: '',
            time_input: '',
            type_input: ''
          }
        }

        postProfile(profile){
          axios.post('http://localhost:3080/api/profiles', {
            username: this.state.username,
            addiction_type: this.state.type_input,
            addiction_time: this.state.time_input
            
          })
        }
        updateUsername(input){
            this.setState({
                username: input
            })
        }
        updateTime(input){
            this.setState({
                time_input: input
            })
        }
        updateType(input){
            this.setState({
                type_input: input
            })      
}


    render() {
        console.log(this.state)
        return(
            <div>
                <div className='profile-box'>
                    <h3> Profile Picture </h3>
                    <input type='file'/>
                    <h3> Username </h3>
                    <input onChange={(e) => this.updateUsername(e.target.value)}type='text' placeholder='enter a username...' />
                    <h3> Addiction type </h3>
                    <select onChange={(e) => this.updateType(e.target.value)}>
                    <option value=''>Select</option>
                    <option value='Alcohol'>Alcohol</option>
                    <option value='Opiates'>Opiates</option>
                    <option value='Benzodiazepines'>Benzodiazepines</option>
                    <option value='Amphetamines'>Amphetamines</option>
                    <option value='Ecstasy'>Ecstasy</option>
                    <option value='Barbituates'>Barbituates</option>
                    <option value='Tobacco'>Tobacco</option>
                    <option value='Gambling'>Gambling</option>
                    <option value='Sex'>Sex</option>
                    <option value='Porn'>Porn</option>
                    <option value='Other'>Other</option>
                </select>
                <h3>How long have you been using?</h3>
                <input onChange={(e) => this.updateTime(e.target.value)} type='text' placeholder='Enter a time' />
                </div>                
                <Link to='/dashboard'><button className='create-profile-button' onClick={() => this.postProfile()}>Create Profile</button> </Link>
            </div>

        )
    }
}
export default Profile;