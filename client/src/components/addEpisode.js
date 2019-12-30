import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getMentorsQuery = gql`
    {
        mentors{
            name
            id
        }
    }
`

class AddEpisode extends Component {
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
                    </select>
                </div>

                <button> + </button>

            </form>
      );
    }
}

// Binding the query and the component!
export default graphql(getMentorsQuery)(AddEpisode);