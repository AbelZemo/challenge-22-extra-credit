// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;

const mongoose = require('mongoose');

const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping');

module.exports = mongoose.connection;
