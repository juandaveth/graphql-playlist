import React, {Component} from 'react';
import {gql} from 'apollo-boost';

import {graphql} from 'react-apollo';

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

class EpisodeList extends Component {
    render(){
        console.log(this.props);
        return (
            <div>
              <ul id="episode-list">
                  <li>Episode name</li>
              </ul>
          </div>
      );
    }
}

export default graphql(getEpisodesQuery)(EpisodeList);