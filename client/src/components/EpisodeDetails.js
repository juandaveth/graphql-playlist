import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getEpisodeQuery} from '../queries/queries';

class EpisodeDetails extends Component {
    render(){
        return (
            <div id="episode-details">
                <p>Output will be here</p>
            </div>
        )
    }
};

export default graphql(getEpisodeQuery)(EpisodeDetails);