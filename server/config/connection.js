const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://avni0000patel:database4@cluster0.q0aig2m.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;
