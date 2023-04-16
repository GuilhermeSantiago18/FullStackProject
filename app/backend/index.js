const app = require('./app')
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;



const URI = process.env.MONGO_URL;
mongoose.connect(URI)
  .then(() => app.listen(PORT, console.log("Server running on port " + PORT)))
  .catch((error) => console.error(error));
  
  


