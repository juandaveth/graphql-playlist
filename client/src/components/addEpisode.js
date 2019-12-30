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

