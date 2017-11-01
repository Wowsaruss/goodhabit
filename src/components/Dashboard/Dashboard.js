import React, {Component} from 'react';
import axios from 'axios'
class Dashboard extends Component {
    constructor() {
        super()
          this.state = {
            profile: []
          }
        }
    componentDidMount(){
        axios.get('http://localhost:3300/api/profiles').then(response => {
            this.setState({
                profile: response.data
            })
        })
    }


    render() {
        console.log(this.state.profile)
        var profile = this.state.profile.map((profile) => {
            return (
                <div className='user-box/'>
                    <h3>Welcome, {profile.username}</h3>
                 </div>
            )
        })


        return(
            <div>
                {profile}

            </div>

        )
    }
}
export default Dashboard;