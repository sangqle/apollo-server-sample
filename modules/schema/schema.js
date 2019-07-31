const { gql } = require('apollo-server')

const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type Query {
    hello: String
    uploads: [File]
    user: User
  }
  type Mutation {
    hello: String
    singleUpload(file: Upload!): File!
    login(input: Login): User
    signup(input: Login): User!
  }

  type Login {
    user_name: String!
    password: String!
  }

  type User {
    id: ID!
    user_name: String!
    email: String!
  }

  type Subscription {
    newMessage: String
  }
`

module.exports = typeDefs
