import React from 'react';
import {graphql} from 'react-apollo';

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