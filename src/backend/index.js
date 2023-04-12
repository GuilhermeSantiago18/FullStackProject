const app = require('./app')
const PORT = process.env.PORT || 3001;



const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/myapp';
mongoose.connect(uri)
  .then(() => app.listen(PORT, console.log("Server running on port " + PORT)))
  .catch((error) => console.error(error));
  
  


