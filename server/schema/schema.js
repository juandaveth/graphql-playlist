const graphql = require('graphql');
const _ = require('lodash');

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
} = graphql;

// dummy data to test episodes
var episodes = [
  {name: 'Joe Rogan Experience #1309 - Naval Ravikant', podcast: 'The Joe Rogan Experience', id: '1'},
  {name: '#343: Seth Godin on How to Say “No,” Market Like a Professional, and Win at Life', podcast: 'The Tim Ferriss Show', id: '2'},
  {name: '#376: How Seth Godin Manages His Life — Rules, Principles, and Obsessions (Repost)', podcast: 'The Tim Ferriss Show', id: '3'},
  {name: '#11 Media Manipulator with Ryan Holiday', podcast: 'The Knowledge Project with Shane Parris', id: '4'},
  {name: '#18 Naval Ravikant — The Angel Philosopher', podcast: 'The Knowledge Project with Shane Parris', id: '5'},
]

const EpisodeType = new GraphQLObjectType({
  name: 'Episode',
  fields:() => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    podcast: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    episode: {
      type: EpisodeType,
      args: { id: {type: GraphQLID} },
      resolve(parent, args){
        // here we will retrieve info from some db
        console.log(typeof(args.id));
        return _.find(episodes, {id: args.id});
      }
    }
  }
});

/* episode(id: "2"){
  name
  podcast
} */

module.exports = new GraphQLSchema({
  query: RootQuery
}); 