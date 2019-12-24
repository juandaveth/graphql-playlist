const graphql = require('graphql');
const _ = require('lodash');
const Episode = require('../models/episode');
const Mentor = require('../models/mentor');

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

// dummy data to test episodes --> Going to MongoDB
/* var episodes = [
  {name: 'Joe Rogan Experience #1309 - Naval Ravikant', podcast: 'The Joe Rogan Experience', id: '1', mentorId: '1'},
  {name: '#343: Seth Godin on How to Say “No,” Market Like a Professional, and Win at Life', podcast: 'The Tim Ferriss Show', id: '2', mentorId: '2'},
  {name: '#376: How Seth Godin Manages His Life — Rules, Principles, and Obsessions (Repost)', podcast: 'The Tim Ferriss Show', id: '3', mentorId: '2'},
  {name: '#11 Media Manipulator with Ryan Holiday', podcast: 'The Knowledge Project with Shane Parris', id: '4', mentorId: '3'},
  {name: '#18 Naval Ravikant — The Angel Philosopher', podcast: 'The Knowledge Project with Shane Parris', id: '5', mentorId: '1'},
  {name: 'Seth Godin: Purple Cows', podcast: 'North Star Podcast', id: '6', mentorId: '2'},
  {name: 'Ryan Holiday: Timeless Lessons From History', podcast: 'North Star Podcast', id: '7', mentorId: '3'},
  {name: 'Ryan Holiday: Using Practical Ancient Philosophy as a Guide to Achieving Mastery', podcast: 'The School of Greatness', id: '8', mentorId: '3'},
] */

// dummy data to mentors --> Going to MongoDB
/* var mentors = [
  {name: 'Naval Ravikant', age: 45, id: '1'},
  {name: 'Seth Godin', age: 59, id: '2'},
  {name: 'Ryan Holiday', age: 32, id: '3'},
]*/

const EpisodeType = new GraphQLObjectType({
  name: 'Episode',
  fields:() => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    podcast: { type: GraphQLString },
    mentor: {
      type: MentorType,
      resolve(parent, args){
        //return _.find(mentors, { id: parent.mentorId});
      }
    }
  })
});

const MentorType = new GraphQLObjectType({
  name: 'Mentor',
  fields:() => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    episodes: {
      type: new GraphQLList(EpisodeType),
      resolve(parent, args){
        //return _.filter(episodes, {mentorId: parent.id})
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    episode: {
      type: EpisodeType,
      args: { id: {type: GraphQLID} },
      resolve(parent, args){
        //return _.find(episodes, {id: args.id});
      }
    },
    mentor: {
      type: MentorType,
      args: { id: {type: GraphQLID} },
      resolve(parent, args){
        //return _.find(mentors, {id: args.id});
      }
    },
    episodes: {
      type: new GraphQLList(EpisodeType),
      resolve(parent, args){
        //return episodes
      }
    },
    mentors: {
      type: new GraphQLList(MentorType),
      resolve(parent, args){
        //return mentors
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
   addMentor: {
     type: MentorType,
     args: {
       name: {type: GraphQLString},
       age: {type: GraphQLInt},
     },
     resolve(parent, args){
       let mentor = new Mentor({
         name: args.name,
         age: args.age,
       });
     }
   } 
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
}); 