import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Chart from '../Chart/Chart';


class Dashboard extends Component {
    constructor() {
        super()
          this.state = {
            profile: [],
            quote: ''
          }
        }

    componentDidMount(){
        axios.get('http://localhost:3300/api/profiles').then(response => {
            this.setState({
                profile: response.data
            })
        })

        axios.get(`http://quotes.rest/qod.json`).then(res => {
            this.setState({
                quote: res.data.contents.quotes[0].quote
            })
        })
    }



    render() {
        var profile = this.state.profile.map((profile) => {
            return (
                <div className='user-box/'>
                    <h3>{profile.username}</h3>
                 </div>
            )
        })

        return(
            <div>
                <div className="quotes"><div>{this.state.quote}</div></div>

                <div className="bg0Dash">
                    <div className="Welcome"> <h3>Welcome {profile},</h3>
                        Don't have a profile yet?<br/>Click the link to get started.&ensp;&ensp;&ensp;&ensp;
                        <span><Link className="profileLink" to="/profile">Create Profile</Link></span>
                    </div>
                    <div className="dashboard">DASHBOARD</div>
                
                    <div className='logoutButton1'>
                    <div className='logoutButton'><a href={`${process.env.REACT_APP_HOST}/auth/logout`}>Logout</a></div>
                    </div>
                </div>

                <div className="bg1Dash">
                <hr/>
                    <div className="badgeParent1">
                        <div className="badgeName"><div className="badge"></div>3 Days Finished</div>
                        <div className="badgeName"><div className="badge"></div>2 Weeks Finished</div>
                        <div className="badgeName"><div className="badge"></div>1 Month Finished</div>
                        <div className="badgeName"><div className="badge"></div>3 Months Finished</div>
                        <div className="badgeName"><div className="badge"></div>5 Months Finished</div>
                        <div className="badgeName"><div className="badge"></div>1 Year Finished</div>
                    </div>

                    <div className="badgeParent2">
                        <div className="badgeName"><div className="arrow1">&ensp;&ensp;&ensp;&ensp; &#8599;</div><div className="badge"></div>1 Day Finished</div>

                        <div className="badgeName"><div className="arrow2">&#8600; &ensp;&ensp;&ensp;&ensp;&ensp;</div>
                        <div className="arrow1">&ensp;&ensp;&ensp;&ensp;&ensp; &#8599;</div><div className="badge"></div>1 Week Finished</div>

                        <div className="badgeName"><div className="arrow2">&#8600; &ensp;&ensp;&ensp;&ensp;&ensp;</div>
                        <div className="arrow1">&ensp;&ensp;&ensp;&ensp;&ensp; &#8599;</div><div className="badge"></div>3 Weeks Finished</div>

                        <div className="badgeName"><div className="arrow2">&#8600; &ensp;&ensp;&ensp;&ensp;&ensp;</div>
                        <div className="arrow1">&ensp;&ensp;&ensp;&ensp;&ensp; &#8599;</div><div className="badge"></div>2 Months Finished</div>

                        <div className="badgeName"><div className="arrow2">&#8600; &ensp;&ensp;&ensp;&ensp;&ensp;</div>
                        <div className="arrow1">&ensp;&ensp;&ensp;&ensp;&ensp; &#8599;</div><div className="badge"></div>4 Months Finished</div>

                        <div className="badgeName"><div className="arrow2">&#8600; &ensp;&ensp;&ensp;&ensp;&ensp;</div>
                        <div className="arrow1">&ensp;&ensp;&ensp;&ensp;&ensp; &#8599;</div><div className="badge"></div>6 Months Finished</div>  
                    </div>
                </div>

                    <div className="graphParent">
                        <hr />
                        <Chart/>
                    </div>

                    <div className="bodyParent">

                        <div className="recoverProgress">
                            <div className="recoverProgress1">START</div>
                            <div className="recoverProgress2">SLIP UP</div>
                        </div>

                        <div className="recoverProgress3">
                            <div><h3>If you have filled out your profile and are ready to begin your transformation. Click on the <span>"START"</span> button to begin recovering.</h3></div>
                            <div><h3>If you happen to slip up during your process, hit the <span className="su">"SLIP UP"</span> button. Realize that everything is okay and that mistakes are part of the process of healing.</h3></div>
                        </div>

                    <div className="marginFix"></div>
                            <div className="marginsTitle">
                                <div className="marginsTitle1">Preview:&ensp; Current Goals</div>
                                <div className="marginsTitle1">Preview:&ensp; Journal Entries</div>
                            </div>
                            
                            <div className="marginsCurrent">
                                <div className="cGoals"></div>
                                <div className="cJournal"></div>
                            </div>

                        <div className="recoverProgress4">
                            <div className="recoverProgress5"><h3>Goals are one of the most important parts of a successful transformation.</h3> 
                            <h3>They are methods by which we can strive to better ourselves and replace negative addictions with positive habits.</h3>
                            <h3>Click on the goals link below to set up realistic goals that will aid in your healing.</h3></div>
                      
                            <div className="recoverProgress5"><h3>Keeping a daily Journal of your progress, struggles and feelings will be a essential record for you.</h3>
                            <h3>An honest Journal aids in the recover process, as it allows an outlet for the feelings that we publically may not want to express.</h3>
                            <h3>Click on the Journal link below to begin writing about your recovering process.</h3></div>
                        </div>
                        

                    </div>
                    






                
            </div>

        )
    }
}
export default Dashboard;