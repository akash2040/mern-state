// require typeDefs and resolvers from their respective files
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// export data for use elsewhere
module.exports = { typeDefs, resolvers };
