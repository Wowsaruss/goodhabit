import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AboutUs extends Component {
    render() {
        return(
           <div> 
            <div className="aboutbg">
                <div className="bgAbout">
                    <div className="aboutParent">
                        <div><h1>About Us</h1></div>
                        <div className="aboutBG"><div className="stripeBG"><Link to="/"><div className="return">Back to Start</div></Link></div>
                            <div className="aboutDes1">
                                <div className="aboutDes2">
 
                                <h3>What is Resolve all about?</h3>
                                <div className="paragraphs">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                                 voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                                 voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                                 velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim 
                                 ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                 consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                                 vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                 </div>
                                 <h3>Why are we interested in helping others.</h3>
                                 <div className="paragraphs2">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                                 voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                                 voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                                 velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim 
                                 ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                 consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                                 vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default AboutUs;