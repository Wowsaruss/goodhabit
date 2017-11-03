import React, {Component} from 'react';
import axios from 'axios';


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
            <div>
                 <div className="BGjournal">
                     <div className='journal-page' >
                            <textarea className="journal-input" type="text" onChange={(e) => this.handleJournalInput(e.target.value)} />
                            <a><div className="submit-btn" onClick={() => this.handleJournalPost()} ><h3 className="submit-text" >Submit</h3></div></a>
                     </div>
                </div>
            </div>
        )
    }
}
export default Journal;