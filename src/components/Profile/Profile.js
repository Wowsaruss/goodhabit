import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Profile extends Component {
    constructor() {
        super()
          this.state = {
            username: '',
            time_input: '',
            type_input: '',
            sex: '',
            birthday: '',
            phone: '',
            first_name: '',
            last_name: '',
            profile_picture: '',
            about_me: ''
          }
        }

        postProfile(profile){
          axios.post(`http://localhost:3300/api/profiles`, {
            username: this.state.username,
            addiction_type: this.state.type_input,
            addiction_date: this.state.time_input,
            sex: this.state.sex,
            birthday: this.state.birthday,
            phone_number: this.state.phone,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            profile_pic: this.state.profile_picture,
            about_me: this.state.about_me
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

        updateSex(input){
            this.setState({
                sex: input
            })
        }

        updateBirthday(input){
            this.setState({
                birthday: input
            })
        }
        updatePhone(input){
            this.setState({
                phone: input
            })
        }
        updateFirstName(input){
            this.setState({
                first_name: input
            })
        }
        updateLastName(input){
            this.setState({
                last_name: input
            })
        }
        updatePicture(input){
            this.setState({
                profile_picture: input
            })
        }
        updateAbout(input){
            this.setState({
                about_me: input
            })
        }


    render() {
        console.log(this.state)
        return(
            <div className="profileBG">
                    <div className="profileParent">
                        <div className="CreateProfile">Create Profile</div>
                        <div className="profileDes">
                              In the healing process it is essential to be able to track, update and monitor your progress. <br/>
                              Your profile will provide visualized improvements of your growth as well as the areas that need attention. <br/>
                              Once your profile is completed the recovering process begins. 
                        </div>
                    </div>

                <div className="selectionParent">
                <div className="selectionBG">
                    <div className='profile-box'>
                        <div className="Row"> 
                            <div className="FRclass">First Name <br/><br/><input onChange={(e) => this.updateFirstName(e.target.value)}   type="text" placeholder="First Name"/></div>
                            <div className="FRclass">Last Name <br/><br/><input onChange={(e) => this.updateLastName(e.target.value)}  type="text" placeholder="Last Name"/></div>
                            <div className="FRclass">Sex<br/><br/>
                                <select  onChange={(e) => this.updateSex(e.target.value)} >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div> 
                            <div className="FRclass">Birthday <br/><br/><input onChange={(e) => this.updateBirthday(e.target.value)}  type="date" /></div>  
                        </div>
                       
                        <div className="Row"> 
                            <div className="FRclass">Username <br/><br/><input onChange={(e) => this.updateUsername(e.target.value)}type='text' placeholder='enter a username...' /></div>
                            <div className="FRclass">Estimated Start of Addiction?<br/><br/><input onChange={(e) => this.updateTime(e.target.value)} type='date' placeholder='Enter a time' /></div>
                            <div className="FRclass">Addiction type <br/><br/>
                                <select onChange={(e) => this.updateType(e.target.value)}>
                                    <option value=''>Select</option>
                                    <option value='Alcohol'>Alcohol</option>
                                    <option value='Drugs'>Drugs / Perscription</option>
                                    <option value='Tobacco'>Smoking / Tobacco</option>
                                    <option value='Sex'>Sex / Porn</option>
                                    <option value='Gambling'>Gambling</option>
                                    <option value='Other'>Other</option>
                                </select> 
                            </div>
                            <div className="FRclass">Phone Number<br/><br/><input  onChange={(e) => this.updatePhone(e.target.value)}  type="text" placeholder="Phone Number"/></div> 
                        </div>
                            
                        <div className="Row2">
                            <div className="FR2class">About Me<br/><br/><textarea type="text" onChange={(e)=>this.updateAbout(e.target.value)}/></div>
                            <div className="FR2class">Profile Picture <br/><br/><input onChange={(e) => this.updatePicture(e.target.value)}  type="file"/></div>
                            <div className="PicBox"></div>
                        </div>   

                        <div className="savePParent">
                                    <div><Link to='/dashboard' className="saveP"><div onClick={() => this.postProfile()}>Save Profile</div></Link></div>
                        </div>  
                    </div>
                </div>
                </div>  
            </div>

        )
    }
}
export default Profile;