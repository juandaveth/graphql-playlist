import React, {Component} from 'react';
import {graphql} from 'react-apollo';

import {getMentorsQuery} from '../queries/queries';

class AddEpisode extends Component {
    displayMentors() {
        var data = this.props.data;
        if(data.loading){
            return (<option disabled>Loading mentors...</option>)
        } else {
            return data.mentors.map(mentor => {
                return( <option key={mentor.id} value={mentor.id}>{mentor.name}</option> )
            })
        }
    };
    render(){
        return (
            <form id="add-episode">

                <div className="field">
                    <label>Episode name:</label>
                    <input type="text"/>
                </div>

                <div className="field">
                    <label>Podcast:</label>
                    <input type="text"/>
                </div>

                <div className="field">
                    <label>Mentor:</label>
                    <select>
                        <option>Select mentor</option>
                        {this.displayMentors()}
                    </select>
                </div>

                <button> + </button>

            </form>
      );
    }
}

// Binding the query and the component!
export default graphql(getMentorsQuery)(AddEpisode);