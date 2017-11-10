import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import units from '../../utilities/units';

class Profile extends Component {
    constructor() {
        super()
          this.state = {
            first_name: '',
            last_name: '',
            sex: '',
            birthday: '',
            username: '',
            time_input: '',
            type_input: '',
            phone: '',
            profile_picture: '',
            about_me: ''
          }
        }

        postProfile(profile){
                units.checkPhoneNumber(this.state.phone)
                    axios.post(`${process.env.REACT_APP_HOST}/api/profiles`, {
                      first_name: this.state.first_name,
                      last_name: this.state.last_name,
                      sex: this.state.sex,
                      birthday: this.state.birthday,
                      username: this.state.username,
                      addiction_date: this.state.time_input,
                      addiction_type: this.state.type_input,
                      phone_number: this.state.phone,
                      about_me: this.state.about_me,
                      profile_pic: this.state.profile_picture
                    })

          alert("Profile Saved")
          this.setState({
              first_name: "",
              last_name: "",
              sex: "",
              birthday: "",
              username: "",
              time_input: "",
              type_input: "",
              phone_number: "",
              about_me: "",
              profile_pic: ""
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
                phone: units.phoneNumberFormat(input)
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
                            <div className="FRclass">First Name <br/><br/><input onChange={(e) => this.updateFirstName(e.target.value)} value={this.state.first_name} type="text" placeholder="First Name"/></div>
                            <div className="FRclass">Last Name <br/><br/><input onChange={(e) => this.updateLastName(e.target.value)} value={this.state.last_name}  type="text" placeholder="Last Name"/></div>
                            <div className="FRclass">Sex<br/><br/>
                                <select  onChange={(e) => this.updateSex(e.target.value)} value={this.state.sex}>
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div> 
                            <div className="FRclass">Birthday <br/><br/><input onChange={(e) => this.updateBirthday(e.target.value)} value={this.state.birthday} type="date" /></div>  
                        </div>
                       
                        <div className="Row"> 
                            <div className="FRclass">Username <br/><br/><input onChange={(e) => this.updateUsername(e.target.value)}type='text' placeholder='enter a username...' value={this.state.username}/></div>
                            <div className="FRclass">Estimated Start of Addiction?<br/><br/><input onChange={(e) => this.updateTime(e.target.value)} type='date' placeholder='Enter a time' value={this.state.time_input} /></div>
                            <div className="FRclass">Addiction type <br/><br/>
                                <select onChange={(e) => this.updateType(e.target.value)} value={this.state.type_input}>
                                    <option value=''>Select</option>
                                    <option value='Alcohol'>Alcohol</option>
                                    <option value='Drugs'>Drugs / Perscription</option>
                                    <option value='Tobacco'>Smoking / Tobacco</option>
                                    <option value='Sex'>Sex / Porn</option>
                                    <option value='Gambling'>Gambling</option>
                                    <option value='Other'>Other</option>
                                </select> 
                            </div>
                            <div className="FRclass">Phone Number<br/><br/><input  onChange={(e) => this.updatePhone(e.target.value)}  type="text" placeholder="Phone Number" value={this.state.phone_number}/></div> 
                        </div>
                            
                        <div className="Row2">
                            <div className="FR2class">About Me<br/><br/><textarea type="text" onChange={(e)=>this.updateAbout(e.target.value)} value={this.state.about_me}/></div>
                            <div className="FR2class">Profile Picture <br/><br/><input onChange={(e) => this.updatePicture(e.target.value)}  type="file" value={this.state.profile_pic}/></div>
                            <div className="PicBox"></div>
                        </div>   

                        <div className="savePParent">
                                    <div className="saveP"><div onClick={() => this.postProfile()}>Save Profile</div></div>
                                    <div><Link to='/dashboard' className="saveP">Dashboard</Link></div>
                        </div>  
                    </div>
                </div>
                </div>  
            </div>

        )
    }
}
export default Profile;