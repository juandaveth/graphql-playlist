import {gql} from 'apollo-boost';

const getEpisodesQuery = gql`
    {
        episodes{
                id
                name
            podcast
        }
    }
`

const getMentorsQuery = gql`
    {
        mentors{
            name
            id
        }
    }
`

const getEpisodeQuery = gql`
    query($id: ID){
        id
        podcast
        mentor{
            id
            name
        }
        episodes{
            
        }
    }
`

const addEpisodeMutation = gql`
    mutation(
        $name: String!,
        $podcast: String!,
        $mentorId: ID!
        ){
        addEpisode(
            name: $name,
            podcast: $podcast,
            mentorId: $mentorId
        ){
            name
            id
        }
    }
`

export {getEpisodesQuery, getMentorsQuery, addEpisodeMutation};