const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allowing cross-origin requests
app.use(cors());

//For testing purposes, I need to figure out a way to hide it
mongoose.connect('mongodb+srv://jureyes:ez1BO1dQb0dfFw7S@gql-ninja-z1y2x.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('connected to mongoDB!!')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});

