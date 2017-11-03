import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Goals extends Component {
        constructor () {
            super() 
            this.state = {
                oneday: "",
                threeday: "",
                oneweek: "",
                twoweek: "",
                threeweek: "",
                onemonth: "",
                twomonth: "",
                threemonth: "",
                fourmonth: "",
                fivemonth: "",
                sixmonth: "",
                oneyear: ""
        }
    }

    handleGoalInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        console.log(this.state)
        return(
            <div></div>
                <div className="BGgoals">
                    
                    <div className="headerGoals"><div className="goalsTitle">Goals</div></div>
                    <div className="bodyGoals">    
                        <div className="sidebarGoals"></div>
                        <div className="mainGoals">
                                <div className="planTitle"><div>Create A Realistic Action Plan For Each Badge</div></div>
                            <div className="plans"><div className="subGoals"> 1 day Action Plan to Overcome Addiction:</div> <div><textarea name="oneday" value={this.state.oneday} type="text" onChange={(e) => this.handleGoalInput(e)} /></div></div>
                            <div className="plans"><div className="subGoals"> 3 day Action Plan to Overcome Addiction:</div> <div><textarea name="threeday" value={this.state.threeday} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 1 Week Action Plan to Overcome Addiction:</div> <div><textarea name="oneweek" value={this.state.oneweek} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 2 Week Action Plan to Overcome Addiction:</div> <div><textarea name="twoweek" value={this.state.twoweek} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 3 Week Action Plan to Overcome Addiction:</div> <div><textarea name="threeweek" value={this.state.threeweek} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 1 Month Action Plan to Overcome Addiction:</div> <div><textarea name="onemonth" value={this.state.onemonth} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 2 Month Action Plan to Overcome Addiction:</div> <div><textarea name="twomonth" value={this.state.twomonth} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 3 Month Action Plan to Overcome Addiction:</div> <div><textarea name="threemonth" value={this.state.threemonth} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 4 Month Action Plan to Overcome Addiction:</div> <div><textarea name="fourmonth" value={this.state.fourmonth} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 5 Month Action Plan to Overcome Addiction:</div> <div><textarea name="fivemonth" value={this.state.fivemonth} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 6 Month Action Plan to Overcome Addiction:</div> <div><textarea name="sixmonth" value={this.state.sixmonth} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans"><div className="subGoals"> 1 Year Action Plan to Overcome Addiction:</div> <div><textarea name="oneyear" value={this.state.oneyear} type="text" onChange={(e) => this.handleGoalInput(e)}/></div></div>
                            <div className="plans2"><div className="planbtn">Submit Goals</div></div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="plans3">
                            <Link to="/dashboard" className="LinkGoals"><div className="planbtn1">Dashbord</div></Link>
                            <Link to="/Journal" className="LinkGoals"><div className="planbtn2">Journal</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Goals;