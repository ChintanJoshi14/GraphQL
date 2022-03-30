const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {graphqlHTTP} = require("express-graphql");
const {buildSchema} = require("graphql");



mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.v6mvw.mongodb.net/moviemaker?retryWrites=true&w=majority",
    {}
  )
  .then(() => console.log("MongoDB connected!"))
  .catch((error) => console.log("Error: ", error));

const schema = buildSchema(`
type Query {
    name: String
}`);

const rootValue = {
    name: () => {
        return 'John Wick'
    }
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue
  })
);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(4000, () => {
  console.log("first");
});
