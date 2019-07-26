const {
  ApolloError,
  ForbiddenError,
  AuthenticationError
} = require('apollo-server')

const resolvers = {
  Query: {
    hello: (_, args, context) => {
      return 'Hello mutation'
    },
    uploads: (parent, args) => {}

    // allTodos: (_, _, context) => {
    //   if (!context.scope) {
    //     throw new AuthenticationError("You must be logged in to see all todos");
    //   }

    //   if (context.scope !== "ADMIN") {
    //     throw new ForbiddenError("You must be an administrator to see all todos");
    //   }

    //   return context.Todos.getAllTodos();
    // },
  },
  Mutation: {
    hello: (_, args, context) => {
      return 'Hello mutation'
    },
    singleUpload: (parent, args) => {
      return args.file.then(file => {
        //Contents of Upload scalar: https://github.com/jaydenseric/graphql-upload#class-graphqlupload
        //file.stream is a node stream that contains the contents of the uploaded file
        //node stream api: https://nodejs.org/api/stream.html
        return file
      })
    }
    //   addTodo: (_, args, context) => {
    //     if(!context.Todos.idAvailable(args.id)) {
    //       throw new ApolloError('The id is already taken', 'DUPLICATE_KEY',  {field: 'id'});
    //     }

    //     return context.Todos.addTodo(args.id, args.todo);
    //   }
  },
  Subscription: {
    newMessage: {
      subscribe: (_, args, context) => {
        return context.pubsub.asyncIterator('something_changed')
      }
    }
  }
}

module.exports = resolvers
