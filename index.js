const { ApolloServer, PubSub } = require("apollo-server-express");
const { prisma } = require("./prisma/generated/prisma-client");

const express = require("express");
const { createServer } = require("http");
const pubsub = new PubSub();
const SOMETHING_CHANGED_TOPIC = "something_changed";

const modules = require("./modules");

const app = express();

// GraphQL middleware

const server = new ApolloServer({
  modules: [...modules],
  context: req => {
    return {
      ...req
    };
  },
  subscriptions: {
    path: "/websocket",
    onConnect: (connectionParams, rawSocket, context) => {
      console.log("onConnect");
      return pubsub.publish(SOMETHING_CHANGED_TOPIC, {
        something_changed: new Date().toString()
      });
      // return {
      //   hello: "world"
      // };
    },
    onDisconnect: rawSocket => {
      console.log("onDisconnect");
      // console.log(rawSocket.upgradeReq)
    }
  }
});

app.use((req, res, next) => {
  req.userId =
    "123456789123456789123456789123456789123456789123456789123456789123456789";
  next();
});

server.applyMiddleware({ app });

// We need to create a separate HTTP server to handle GraphQL subscriptions via websockets
const httpServer = createServer(app);

server.installSubscriptionHandlers(httpServer);

httpServer.listen(4000, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

//publish events every second
// var memory = process.memoryUsage()
// setInterval(() => {
//   let memory = process.memoryUsage()
//   // console.log(memory)
//   return pubsub.publish(SOMETHING_CHANGED_TOPIC, {
//     something_changed: new Date().toString()
//   })
// }, 1000)
