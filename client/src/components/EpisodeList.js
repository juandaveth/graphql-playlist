import React, {Component} from 'react';
import {getEpisodesQuery} from '../queries/queries';

import {graphql} from 'react-apollo';

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