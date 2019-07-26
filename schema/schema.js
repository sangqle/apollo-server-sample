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
  }
  type Mutation {
    hello: String
    singleUpload(file: Upload!): File!
  }

  type Subscription {
    newMessage: String
  }
`

module.exports = typeDefs
