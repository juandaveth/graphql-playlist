import {gql} from 'apollo-boost';

const getEpisodesQuery = gql`
    {
        episodes{
                id
                name
            mentor {
                id
                name
            }
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

export {getEpisodesQuery, getMentorsQuery};