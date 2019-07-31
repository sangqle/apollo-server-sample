const { gql } = require('apollo-server')

const typeDefs = gql`
  extend type Query {
    me: String
  }
  type User {
    id: ID!
    user_name: String!
    email: String!
  }
`
module.exports = typeDefs
