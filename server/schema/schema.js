const graphql = require('graphql');
const _ = require('lodash');
const Episode = require('../models/Episode');
const Mentor = require('../models/Mentor');

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// dummy data to test episodes --> Going to MongoDB
/* var episodes = [
  {name: 'Joe Rogan Experience #1309 - Naval Ravikant', podcast: 'The Joe Rogan Experience', id: '1', mentorId: '1'},
  {name: '#343: Seth Godin on How to Say “No,” Market Like a Professional, and Win at Life', podcast: 'The Tim Ferriss Show', id: '2', mentorId: '2'},
  {name: '#376: How Seth Godin Manages His Life — Rules, Principles, and Obsessions (Repost)', podcast: 'The Tim Ferriss Show', id: '3', mentorId: '2'},
  {name: '#11 Media Manipulator with Ryan Holiday', podcast: 'The Knowledge Project with Shane Parris', id: '4', mentorId: '3'},
  {name: '#18 Naval Ravikant — The Angel Philosopher', podcast: 'The Knowledge Project with Shane Parris', id: '5', mentorId: '1'},
  {name: 'Seth Godin: Purple Cows', podcast: 'North Star Podcast', id: '6', mentorId: '2'},
    5e04e132a0d9d84bb09579f5
  {name: 'Ryan Holiday: Timeless Lessons From History', podcast: 'North Star Podcast', id: '7', mentorId: '3'},
  {name: 'Ryan Holiday: Using Practical Ancient Philosophy as a Guide to Achieving Mastery', podcast: 'The School of Greatness', id: '8', mentorId: '3'},
] */

// dummy data to mentors --> Going to MongoDB
/* var mentors = [
  {name: 'Naval Ravikant', age: 45, id: '1'}, 5e04dfb5a0d9d84bb09579f0
  {name: 'Seth Godin', age: 59, id: '2'}, 5e04ddaf58c1be2ac81f1547
  {name: 'Ryan Holiday', age: 32, id: '3'}, 5e04dfe3a0d9d84bb09579f1
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
        return Mentor.findById(parent.mentorId)
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
        return Episode.find({mentorId: parent.id});
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
        return Episode.findById(args.id);
      }
    },
    mentor: {
      type: MentorType,
      args: { id: {type: GraphQLID} },
      resolve(parent, args){
        //return _.find(mentors, {id: args.id});
        return Mentor.findById(args.id);
      }
    },
    episodes: {
      type: new GraphQLList(EpisodeType),
      resolve(parent, args){
        //return episodes
        return Episode.find({});
      }
    },
    mentors: {
      type: new GraphQLList(MentorType),
      resolve(parent, args){
        //return mentors
        return Mentor.find({});
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
       name: {type: new GraphQLNonNull(GraphQLString)},
       age: {type: new GraphQLNonNull(GraphQLInt)},
     },
     resolve(parent, args){
       let mentor = new Mentor({
         name: args.name,
         age: args.age,
       });
       return mentor.save();
     }
   },
   addEpisode: {
     type: EpisodeType,
     args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        podcast: { type: new GraphQLNonNull(GraphQLString)},
        mentorId: {type: new GraphQLNonNull(GraphQLID)},
     },
     resolve(parent, args){
       let episode = new Episode({
         name: args.name,
         podcast: args.podcast,
         mentorId: args.mentorId,
       });
       return episode.save();
     }
   } 
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
}); 