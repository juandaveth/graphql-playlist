import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import { flowRight as compose } from 'lodash';

import {getMentorsQuery, addEpisodeMutation} from '../queries/queries';

class AddEpisode extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            podcast: '',
            mentorId: ''
        };
    };
    
    // This function shows a list of the Episode retreived from mongoDB
    displayMentors() {
        // Can't read .loading of undefined, we named it on the compose down below
        var data = this.props.getMentorsQuery;
        if(data.loading){
            return (<option disabled>Loading mentors...</option>)
        } else {
            return data.mentors.map(mentor => {
                return( <option 
                            key={mentor.id} 
                            value={mentor.id}
                        >
                            {mentor.name}
                        </option> 
                    )
            })
        }
    };

    // This function will triger the submiting of the form 
    submitForm(e){
        e.preventDefault();
        this.props.addEpisodeMutation();
    }

    render(){
        return (
            <form 
                onSubmit={this.submitForm.bind(this)}
                id="add-episode"
            >

                <div className="field">
                    <label>Episode name:</label>
                    <input 
                        type="text"
                        onChange={
                            (e) => this.setState({name: e.target.value})
                        }
                    />
                </div>

                <div className="field">
                    <label>Podcast:</label>
                    <input 
                        type="text"
                        onChange={
                            (e) => this.setState({podcast: e.target.value})
                        }
                    />
                </div>

                <div className="field">
                    <label>Mentor:</label>
                    <select
                        onChange={
                            (e) => this.setState({mentorId: e.target.value})
                        }
                    >
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
export default compose(
    graphql(getMentorsQuery, {name: "getMentorsQuery"}),
    graphql(addEpisodeMutation, {name: "addEpisodeMutation"})
)(AddEpisode);