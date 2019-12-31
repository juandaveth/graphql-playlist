import React, {Component} from 'react';
import {gql} from 'apollo-boost';

import {graphql} from 'react-apollo';

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

class EpisodeList extends Component {
    displayEpisodes() {
        var data = this.props.data;
        if(data.loading) {
          return(<div>Loading episodes...</div>);
        } else {
            return data.episodes.map(episode => {
                return(
                        <li key={episode.id}>
                            {episode.name}
                        </li>
                    );
          })
        }
    };
    render(){
        console.log(this.props.data);
        return (
            <div>
              <ul id="episode-list">
                  {this.displayEpisodes()}
              </ul>
          </div>
      );
    }
}

export default graphql(getEpisodesQuery)(EpisodeList);