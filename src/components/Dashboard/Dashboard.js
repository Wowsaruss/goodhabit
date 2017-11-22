import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Chart from '../Chart/Chart';
import day1 from "../../Badges/day1coin.png";
import day3 from "../../Badges/day3coin.png";
import week1 from "../../Badges/week1coin.png";
import week2 from "../../Badges/week2coin.png";
import week3 from "../../Badges/week3coin.png";
import month1 from "../../Badges/onemonthcoin.png";
import month2 from "../../Badges/twomomfs.png";
import month3 from "../../Badges/3monthcoin.png";
import month4 from "../../Badges/4monthcoin.png";
import month5 from "../../Badges/5monthscoins.png";
import month6 from "../../Badges/6monthcoin.png";
import year1 from "../../Badges/1yearcoin.png";


class Dashboard extends Component {
    constructor() {
        super()
          this.state = {
            profile: [],
            quote: '',
            journalEntries: [],
            goalEntries: []
          }
        }
        

    componentDidMount(){
        axios.get(`/api/profiles`).then(response => {
            this.setState({
                profile: response.data
            })
        });
        axios.get(`http://quotes.rest/qod.json`).then(res => {
            this.setState({
                quote: res.data.contents.quotes[0].quote
            })
        });
        axios.get(`/api/journal`).then(response => {
            this.setState({
                journalEntries: response.data
            })
        });
        axios.get(`/api/goals`).then(response => {
            this.setState({
                goalEntries: response.data
            })
        });
    }
    handleJournalDelete(journal) {
        axios.delete(`/api/journal/${journal}`).then(res => {
            this.setState({
                journalEntries: res.data
            })
        });
    }
    handleGoalsDelete(goal) {
        axios.delete(`/api/goals/${goal}`).then(res => {
            this.setState({
                goalEntries: res.data
            })
        });
    }

    render() {
/////////////////////////////////////////////////////////////////////////////////////////////
        let journalEntries = this.state.journalEntries.map((journalEntries) => {
            return (
                <div>
                    <div className="jtitleParent">
                        <div className="jourDate">
                            <span>Title:&emsp;</span>
                            {journalEntries.journal_title}&emsp;&emsp;
                            <span>Date:&emsp;</span>
                            {journalEntries.journal_date}&emsp;&emsp;
                            <span>Time:&emsp;</span>
                            {journalEntries.journal_time}
                        </div>
                        <div className="deleteBtn" onClick={(e) => this.handleJournalDelete(journalEntries.id)} >X</div>
                    </div>
                    <div className="jourEntries">
                        {journalEntries.journal_entry}
                    </div>
                </div>
            )
        })
/////////////////////////////////////////////////////////////////////////////////////////////
        let goalEntries = this.state.goalEntries.map((goalEntries) => {
            return (
            <div>
                <div className="gtitleParent">
                    <div className="goalsDay">Day 1 Goal:&emsp;</div>
                    <div className="deleteGoals">Clear Goals</div><div className="deleteBtn2" onClick={(e) => this.handleGoalsDelete(goalEntries.id)}> X </div>
                </div>
                    <div className="gday">{goalEntries.oneday}</div>

                <div className="gtitleParent">
                    <div className="goalsDay">Day 3 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.threeday}</div>
            
                <div className="gtitleParent">
                    <div className="goalsDay">Week 1 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.oneweek}</div>

                    <div className="gtitleParent">
                    <div className="goalsDay">Week 2 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.twoweek}</div>

                    <div className="gtitleParent">
                    <div className="goalsDay">Week 3 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.threeweek}</div>

                    <div className="gtitleParent">
                    <div className="goalsDay">Month 1 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.onemonth}</div>

                    <div className="gtitleParent">
                    <div className="goalsDay">Month 2 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.twomonth}</div>

                    <div className="gtitleParent">
                    <div className="goalsDay">Month 3 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.threemonth}</div>

                    <div className="gtitleParent">
                    <div className="goalsDay">Month 4 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.fourmonth}</div>

                    <div className="gtitleParent">
                    <div className="goalsDay">Month 5 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.fivemonth}</div>

                    <div className="gtitleParent">
                    <div className="goalsDay">Month 6 Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.sixmonth}</div>

                    <div className="gtitleParent">
                    <div className="goalsDay">1 year Goal:&emsp;</div>
                </div>
                    <div className="gday">{goalEntries.oneyear}</div>
                    
                <div>
                </div>
            </div>
            )
        })
/////////////////////////////////////////////////////////////////////////////////////////////
        let profile = this.state.profile.map(() => {
            return (
                <div className='user-box/'>
                    <h3>{profile.username}</h3>
                 </div>
            )
        })
/////////////////////////////////////////////////////////////////////////////////////////////
        return(
            <div>
                <div className="bg0Dash">
                    <div className="dashboard">DASHBOARD</div>
                </div>
                <div className="Welcome">
                    {/* <h2>Welcome {profile},</h2> */}
                    Don't have a profile yet?<br/>Click the link to get started.&ensp;&ensp;&ensp;&ensp<br/><br/>
                    <span><Link className="profileLink" to="/profile">Create Profile&ensp;&ensp;</Link></span>
                    <span><a className="profileLink" href={`${process.env.REACT_APP_HOST}/auth/logout`}>&ensp; / &ensp;Logout</a></span>
                </div>
                <div className="quotesParent">
                    <div className="quotes">
                        <div>
                            {this.state.quote}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="bg1Dash">
                    <div className="badgeParent1">
                        <div className="badgeName">
                            <div className="badge">
                                <img src={day3} alt=""/>
                            </div>
                            3 Days Finished
                        </div>
                        <div className="badgeName">
                            <div className="badge">
                                <img src={week2} alt=""/>
                            </div>
                            2 Weeks Finished
                        </div>
                        <div className="badgeName">
                            <div className="badge">
                                <img src={month1} alt=""/>
                            </div>
                            1 Month Finished
                        </div>
                        <div className="badgeName">
                            <div className="badge">
                                <img src={month3} alt=""/>
                            </div>
                            3 Months Finished
                        </div>
                        <div className="badgeName">
                            <div className="badge">
                                <img src={month5} alt=""/>
                            </div>
                            5 Months Finished
                        </div>
                        <div className="badgeName">
                            <div className="badge">
                                <img src={year1} alt=""/>
                            </div>
                            1 Year Finished
                        </div>
                    </div>
                    <div className="badgeParent2"> 
                        <div className="badgeName">
                            <div className="arrow1">
                                &ensp;&ensp;&ensp;&ensp; &#8599;
                            </div>
                            <div className="badge">
                                <img src={day1} alt=""/>
                            </div>
                            1 Day Finished
                        </div>
                        <div className="badgeName">
                            <div className="arrow2">
                                &#8600; &ensp;&ensp;&ensp;&ensp;&ensp;
                            </div>
                            <div className="arrow1">
                                &ensp;&ensp;&ensp;&ensp;&ensp; &#8599;
                            </div>
                            <div className="badge">
                                <img src={week1} alt=""/>
                            </div>
                            1 Week Finished
                        </div>
                        <div className="badgeName">
                            <div className="arrow2">
                                &#8600; &ensp;&ensp;&ensp;&ensp;&ensp;
                            </div>
                            <div className="arrow1">
                                &ensp;&ensp;&ensp;&ensp;&ensp; &#8599;
                            </div>
                            <div className="badge">
                                <img src={week3} alt=""/>
                            </div>
                            3 Weeks Finished
                        </div>
                        <div className="badgeName">
                            <div className="arrow2">
                                &#8600; &ensp;&ensp;&ensp;&ensp;&ensp;
                            </div>
                            <div className="arrow1">
                                &ensp;&ensp;&ensp;&ensp;&ensp; &#8599;
                            </div>
                            <div className="badge">
                                <img src={month2} alt=""/>
                            </div>
                            2 Months Finished
                        </div>
                        <div className="badgeName">
                            <div className="arrow2">
                                &#8600; &ensp;&ensp;&ensp;&ensp;&ensp;
                            </div>
                            <div className="arrow1">
                                &ensp;&ensp;&ensp;&ensp;&ensp; &#8599;
                            </div>
                            <div className="badge">
                                <img src={month4} alt=""/>
                            </div>
                            4 Months Finished
                        </div>
                        <div className="badgeName">
                            <div className="arrow2">
                                &#8600; &ensp;&ensp;&ensp;&ensp;&ensp;
                            </div>
                            <div className="arrow1">
                                &ensp;&ensp;&ensp;&ensp;&ensp; &#8599;
                            </div>
                            <div className="badge">
                                <img src={month6} alt=""/>
                            </div>
                            6 Months Finished
                        </div>  
                    </div>
                </div>
                <div className="graphParent">
                     <hr />
                    <Chart/>
                    <div className="recoverProgress">
                        <div className="recoverProgress1">START</div>
                        <div className="recoverProgress2">SLIP UP</div>
                    </div>
                    <div className="recoverProgress3">
                        <div>
                            <h3>If you have filled out your profile and are ready to begin your transformation. Click on the <span>"START"</span> button to begin recovering.</h3>
                        </div>
                        <div>
                            <h3>If you happen to slip up during your process, hit the <span className="su">"SLIP UP"</span> button. Realize that everything is okay and that mistakes are part of the process of healing.</h3>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
                <div className="marginsTitle">
                    <div className="marginsTitle1">Current Goals</div>
                    <div className="recoverProgress5">
                        <h3>Goals are one of the most important parts of a successful transformation and will be a daily reminder to overcome obsticles.</h3> 
                        <h3>It is important that before you begin you set realistic goals. To set or change a goal,
                            <br/>
                            <Link className="goalLink" to="/goals">
                                <span>Click Here</span>
                            </Link>
                            </h3>
                        <h3>They are methods by which we can strive to better ourselves and replace negative addictions with positive habits.</h3>
                    </div>
                    <div className="cGoals">
                        <div className="overflow">
                            <div>{goalEntries}</div>
                        </div>
                    </div>
                    <div className="marginsTitle1">Journal Entries</div>
                    <div className="recoverProgress5">
                        <h3>Keeping a daily Journal of your progress, struggles and feelings will be a essential record for you.</h3>
                        <h3>Be sure to write in your journal everyday. To begin writing about your recovering process.<br/>
                            <Link className="goalLink" to="/journal">
                                <span>Click Here</span>
                            </Link>
                        </h3>
                        <h3>An honest Journal aids in the recover process, as it allows an outlet for the feelings that we publically may not want to express.</h3>
                    </div>
                    <div className="cJournal">
                        <div className="overflow">
                            <div>
                                {journalEntries}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerDash">
                    <Link to="/goals" className="LinkD">
                        <div className="footerDashGoals">Goals</div>
                    </Link>
                    <Link to="/journal" className="LinkD">
                        <div className="footerDashGoals">Journal</div>
                    </Link>
                </div>  
            </div>
        )
    }
}
export default Dashboard;