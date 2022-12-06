// require graphql
const { gql } = require('apollo-server-express');

// set up typeDefs
const typeDefs = gql`
    type Tech {
        _id: ID
        name: String
    }
    
    type Matchup {
        _id: ID
        tech1: String
        tech2: String
        tech1_votes: [Vote]!
        tech2_votes: [Vote]!
    }

    type Vote {
        _id: ID
        tech_votes: Number
    }
    
    type Query {
        tech: [Tech]
        matchups: [Matchup]
        matchup(matchupId: ID!): Matchup
    }
    
    type Mutation {
        addMatchup(tech1: String!, tech2: String!)
        addVote(matchipId: ID!, tech1_votes: Number!, tech2_votes: Number!)
    }
`;

// export typeDefs for use elsewhere
module.exports = typeDefs;
