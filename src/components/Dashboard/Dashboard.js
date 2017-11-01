import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';



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
                    <h3>{profile.username}</h3>
                 </div>
            )
        })


        return(
            <div>
                <div className="bg0Dash">
                    <div className="Welcome"> <h3>Welcome {profile},</h3>
                        Don't have a profile yet?<br/>Click the link to get started.&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                        <span><Link className="profileLink" to="/profile">Create Profile</Link></span>
                    </div>
                    <div className='logoutButton' >
                        <a href={`${process.env.REACT_APP_HOST}/auth/logout`} >Logout</a>
                    </div>
                 </div>
                <div className="bg1Dash">
                    <div className="badgeParent1">
                        <div className="badgeName"><div className="badge"></div>1 Day Finished</div>
                        <div className="badgeName"><div className="badge"></div>3 Day Finished</div>
                        <div className="badgeName"><div className="badge"></div>1 Week Finished</div>
                        <div className="badgeName"><div className="badge"></div>2 Weeks Finished</div>
                        <div className="badgeName"><div className="badge"></div>3 Weeks Finished</div>
                        <div className="badgeName"><div className="badge"></div>1 Month Finished</div>
                    </div>

                    <div className="badgeParent2">
                        <div className="badgeName"><div className="badge"></div>2 Months Finished</div>
                        <div className="badgeName"><div className="badge"></div>3 Months Finished</div>
                        <div className="badgeName"><div className="badge"></div>4 Months Finished</div>
                        <div className="badgeName"><div className="badge"></div>5 Months Finished</div>
                        <div className="badgeName"><div className="badge"></div>6 Months Finished</div>
                        <div className="badgeName"><div className="badge"></div>1 Year Finished</div>
                    </div>
                </div>






                
            </div>

        )
    }
}
export default Dashboard;