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

export {getEpisodesQuery}