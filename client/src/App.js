import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import EpisodeList from './components/EpisodeList';
import AddEpisode from './components/AddEpisode';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Tribe of Podcast Mentors</h1>
        <EpisodeList />
        <AddEpisode />
      </div>
    </ApolloProvider>
  
  );
}

export default App;
