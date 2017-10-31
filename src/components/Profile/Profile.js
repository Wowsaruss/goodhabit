import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return(
            <div>
                <div className='profile-box'>
                    <h3> Username </h3>
                    <input type='text' placeholder='enter a username...' />
                    <h3> Addiction type </h3>
                    <select>
                    <option value=''>Select</option>
                    <option value='Alcohol'>Alcohol</option>
                    <option value='Opiates'>Opiates</option>
                    <option value='Benzodiazepines'>Benzodiazepines</option>
                    <option value='Amphetamines'>Amphetamines</option>
                    <option value='Ecstasy'>Ecstasy</option>
                    <option value='Barbituates'>Barbituates</option>
                    <option value='Tobacco'>Tobacco</option>
                    <option value='Gambling'>Gambling</option>
                    <option value='Sex'>Sex</option>
                    <option value='Porn'>Porn</option>
                    <option value='Other'>Other</option>
                </select>
                </div>


            </div>

        )
    }
}
export default Profile;