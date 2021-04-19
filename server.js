require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongoose = require('mongoose');

const todos = require('./routes/todos');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// ? setting our routes here
app.use('/todos', todos);

//  * connecting the db using mongoose.connect which takes two param @uriString and @options
mongoose
  .connect(process.env.DB_NAME, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database Connected`))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
});
