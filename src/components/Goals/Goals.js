import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Goals extends Component {
    render() {
        return(
            <div>
                <div className="BGgoals">
                    
                    <div className="headerGoals"><div className="goalsTitle">Goals</div></div>
                    <div className="bodyGoals">    
                        <div className="sidebarGoals"></div>
                        <div className="mainGoals">
                                <div className="planTitle"><div>Create A Realistic Action Plan For Each Badge</div></div>
                            <div className="plans"><div className="subGoals"> 1 day Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 3 day Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 1 Week Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 2 Week Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 3 Week Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 1 Month Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 2 Month Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 3 Month Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 4 Month Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 5 Month Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 6 Month Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
                            <div className="plans"><div className="subGoals"> 1 Year Action Plan to Overcome Addiction:</div> <div><textarea type="text"/></div></div>
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