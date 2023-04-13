const app = require('./app')
const mongoose = require('mongoose');

const PORT = 3001;



const uri = 'mongodb://localhost:27017/myapp';
mongoose.connect(uri)
  .then(() => app.listen(PORT, console.log("Server running on port " + PORT)))
  .catch((error) => console.error(error));
  
  


