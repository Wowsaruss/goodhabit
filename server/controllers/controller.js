module.exports = {

    submitProfileData: (req, res) => {
        const profileData = req.app.get('db')
        req.app.get('db').create_profile([req.auth_id, req.body.username, req.body.addiction_type, req.body.addiction_date, req.body.first_name, req.body.last_name, req.body.sex, req.body.birthday, req.body.phone_number, req.body.profile_pic, req.body.about_me]).then(profile => {
            res.send()
        })
        .catch( function(err){
            console.log(err)
        })
    },

    

    submitJournalData: (req, res) => {
        const db = req.app.get('db')
        req.app.get('db').journal_entry([req.user.id, req.body.journal_entry, req.body.journal_date, req.body.journal_time]).then(profile => {
            res.send("Hi")
        }).catch((err) => {console.log(err)})
    },

    submitGoalData: (req,res) => {
        const db = req.app.get('db')
        req.app.get('db').goals_input([req.user.id, req.body.oneday, req.body.threeday, req.body.oneweek, req.body.twoweek, 
            req.body.threeweek, req.body.onemonth, req.body.twomonth, req.body.threemonth, req.body.fourmonth, 
            req.body.fivemonth, req.body.sixmonth, req.body.oneyear]).then(profile => {
                res.send("hi")
            }).catch((err) => {console.log(err)})
    },

    getProfileData: (req, res) => {
        req.app.get('db').get_profile([req.user.id, req.body.username, req.body.addiction_type, req.body.addiction_time]).then(profile =>{
            res.status(200).send(profile);
        }).catch((err) => {console.log(err)})
    },

    getJournalData: (req, res) => {
        req.app.get('db').get_journal([]).then(journal => {
            res.status(200).send(journal);
        }).catch((err) => {console.log(err)})
    },

    getGoalsData: (req, res) => {
        req.app.get('db').get_goals(1).then(goals => {
            res.status(200).send(goals);
        }).catch((err) => {console.log(err)})
    },

    deleteJournalData: (req, res) => {
        req.app.get('db').delete_journal(req.body.id, 1).then(journal => {
            res.status(200).send(journal);
        }).catch((err) => {console.log(err)})
    },

    deleteGoalsData: (req, res) => {
        req.app.get('db').delete_goals(req.body.id, 1).then(goals => {
            res.status(200).send(goals);
        }).catch((err) => {console.log(err)})
    },

    updateGoalsData: (req, res) => {
        req.app.get('db').update_goals(req.params.id, req.body.oneday,
            req.body.threeday,req.body.oneweek,
            req.body.twoweek,req.body.threeweek,
            req.body.onemonth,req.body.twomonth,
            req.body.threemonth,req.body.fourmonth,
            req.body.fivemonth,req.body.sixmonth,
            req.body.oneyear).then(goals => {
            res.status(200).send(goals)
        }).catch((err)=> {console.log((err))})
    }
};

