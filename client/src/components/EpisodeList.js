import React from 'react';
import {gql} from 'apollo-boost';

const getEpisodesQuery = gql`
    {
        episodes{
        name
        mentor {
            id
        }
        podcast
        }
    }
`

function EpisodeList() {
  return (
      <div>
        <ul id="episode-list">
            <li>Episode name</li>
        </ul>
      </div>
  );
}

export default EpisodeList;