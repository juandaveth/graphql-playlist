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
    getMentors() {
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
                        {this.getMentors()}
                    </select>
                </div>

                <button> + </button>

            </form>
      );
    }
}

// Binding the query and the component!
export default graphql(getMentorsQuery)(AddEpisode);