import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Journal extends Component {
    constructor() {
        super()
        this.state = {
            journalEntry: ''
        }
      }

      handleJournalPost(post) {
        axios.post(`${process.env.REACT_APP_HOST}/api/journal`, {
            journal_entry: this.state.journalEntry
        })
      }

      handleJournalInput(input) {
          this.setState({
            journalEntry: input
          })
      }
    
    render() {
        console.log(this.state);
        return(
            <div className="BGjournal">
                <div>
                    <div className="headerJournal"><div className="journalTitle">Journal</div></div>
                    <div className="bodyJournal">    
                        <div className="sidebarJournal"></div>
                        <div className="mainJournal">
                            <div className="planTitle"><div>Create an Updated Journal</div></div>                        

                                <div className="journalParent"><div className="textJournal"><textarea className="journal-input" type="text" onChange={(e) => this.handleJournalInput(e.target.value)} /></div></div>
                                <div className="submitParentJour"><a><div className="submit-btn" onClick={() => this.handleJournalPost()} ><h3 className="submit-text" >Submit</h3></div></a></div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="plans3">
                            <Link to="/dashboard" className="LinkGoals"><div className="planbtn1">Dashbord</div></Link>
                            <Link to="/goals" className="LinkGoals"><div className="planbtn2">Goals</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Journal;