import React from 'react';
import ApolloClient from 'apollo-boost';

import EpisodeList from './components/EpisodeList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql';
})

function App() {
  return (
    <div className="main">
      <h1>Hello World!</h1>
      <EpisodeList />
    </div>
  );
}

export default App;
