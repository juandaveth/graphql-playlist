const graphql = require('graphql');

// Firt we'll define one object type
// Using ES6 destructuring
const { GraphQLObjectType, GraphQLString } = graphql;

const EpisodeType = new GraphQLObjectType({
  name: 'Episode',
  fields:() => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    show: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

  }
})