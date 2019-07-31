const { gql } = require('apollo-server')

const typeDefs = gql`
  extend type Query {
    me: String
  }
  extend type Mutation {
    user(userId: String): String
    login(input: Login!): User
    signup(input: Login!): User!
  }

  extend type Subscription {
    user: String
  }
  input Login {
    email: String!
    password: String!
  }
  type User {
    id: ID!
    email: String!
    password: String!
  }
`
module.exports = typeDefs
