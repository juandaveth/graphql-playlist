import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getEpisodeQuery} from '../queries/queries';

class EpisodeDetails extends Component {
    render(){
        console.log(this.props);
        return (
            <div id="episode-details">
                <p>Output will be here</p>
            </div>
        )
    }
};

export default graphql(getEpisodeQuery, {
    options:(props) => {
        return {
            variables: {
                id: props.episodeId
            }
        }
    }
})(EpisodeDetails);