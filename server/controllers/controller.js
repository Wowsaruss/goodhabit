module.exports = {

    submitProfileData: (req, res) => {
        const profileData = app.get('db')
        req.app.get('db').create_profile([ req.body.username, req.body.addiction_type, req.body.addiction_date, req.body.first_name, req.body.last_name, req.body.sex, req.body.birthday, req.body.phone_number, req.body.profile_pic, req.body.about_me]).then(profile => {
            res.send()
        })
        .catch( function(err){
            console.log(err)
        })
    },

    submitJournalData: (req, res) => {
        const db = req.app.get('db')
        req.app.get('db').journal_entry([req.body.journal_entry]).then(profile => {
            res.send("Hi")
        }).catch((err) => {console.log(err)})
    },

    getProfileData: (req, res) => {
        req.app.get('db').get_profile( req.body.username, req.body.addiction_type, req.body.addiction_time).then(profile =>{
            res.status(200).send(profile);
        }).catch((err) => {console.log(err)})
    }

};