const { gql } = require('apollo-server')

const typeDefs = gql`
  extend type Query {
    post: String
  }
  extend type Mutation {
    post: String
  }
`
module.exports = typeDefs
