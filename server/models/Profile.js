const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
    image: {
        type: String
    },
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
