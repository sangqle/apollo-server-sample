const { ApolloServer, PubSub } = require('apollo-server-express')
const express = require('express')
const { createServer } = require('http')
const pubsub = new PubSub()
const SOMETHING_CHANGED_TOPIC = 'something_changed'

const modules = require('./modules')
// Provide resolver functions for your schema fields
const server = new ApolloServer({
  modules: [...modules],
  context: req => ({ ...req, pubsub })
})

const app = express()

// GraphQL middleware
server.applyMiddleware({ app })

// We need to create a separate HTTP server to handle GraphQL subscriptions via websockets
const httpServer = createServer(app)

server.installSubscriptionHandlers(httpServer)

httpServer.listen(4000, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

//publish events every second
setInterval(
  () =>
    pubsub.publish(SOMETHING_CHANGED_TOPIC, {
      newMessage: new Date().toString()
    }),
  1000
)
