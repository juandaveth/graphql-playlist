import React, {Component} from 'react';
import {getEpisodesQuery} from '../queries/queries';
import {graphql} from 'react-apollo';
import EpisodeDetails from './EpisodeDetails';
import { getBlockStringIndentation } from 'graphql/language/blockString';

class EpisodeList extends Component {
    constructor(props){
        super(props);
        this.state={
            selected: null
        }
    }
    displayEpisodes() {
        var data = this.props.data;
        if(data.loading) {
          return(<div>Loading episodes...</div>);
        } else {
            return data.episodes.map(episode => {
                return(
                        <li 
                            key={episode.id}
                            onClick={(e)=> {
                                this.setState({selected: episode.id})
                            }}
                        >
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
              <EpisodeDetails />
            </div>
      );
    }
}

export default graphql(getEpisodesQuery)(EpisodeList);