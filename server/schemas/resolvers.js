// set up the authentication error and models needed
const { AuthenticationError } = require('apollo-server-express');
const { Tech, Matchup } = require ('../models');

// set up resolvers for queries and mutations
const resolvers = {
    Query: {
        // find all tech options
        tech: async () => {
            return Tech.find();
        }

        // find all matchups
        matchups: async () => {
            
        }
    }
}